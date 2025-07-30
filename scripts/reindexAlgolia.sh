#!/bin/bash
# Script to reindex Algolia using the Algolia Crawler API
# https://www.algolia.com/doc/rest-api/crawler/#section/Availability-and-authentication

# Needs env variables ALGOLIA_USER_ID, ALGOLIA_API_KEY, ALGOLIA_CRAWLER_ID to be set
source ./.env

SITEMAP="dist/sitemap.xml"

# Base64 encode your credentials
CREDENTIALS=$(echo -n "${ALGOLIA_USER_ID}:${ALGOLIA_API_KEY}" | base64)

check_task_status() {
  local TASK_ID="$1"

  TASK_STATUS=$(curl -s -X GET "https://crawler.algolia.com/api/1/crawlers/${ALGOLIA_CRAWLER_ID}/tasks/${TASK_ID}" \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H "Content-Type: application/json" | jq -r '.pending')

  if [ "$TASK_STATUS" == "true" ]; then
    echo "🔄 Task is still pending. Retrying in 1 second..."
    sleep 1
    check_task_status "$TASK_ID"
  fi
}

# 
# CRAWL ALL PAGES
# 
crawl_all_site() {
  RESPONSE=$(curl -s -X POST "https://crawler.algolia.com/api/1/crawlers/${ALGOLIA_CRAWLER_ID}/reindex" \
    -H "Authorization: Basic ${CREDENTIALS}" \
    -H "Content-Type: application/json")

  TASK_ID=$(echo "$RESPONSE" | jq -r '.taskId')

  # Step 3: Check if the TASK_ID was successfully captured
  if [ -z "$TASK_ID" ] || [ "$TASK_ID" == "null" ]; then
    echo "❌ Error: Failed to retrieve a valid taskId. Please check the response: $RESPONSE"
    exit 1
  fi

  echo "✅ Success! Task started with taskId: ${TASK_ID}"

  check_task_status "$TASK_ID" "$CREDENTIALS"
}

# 
# CRAWL SINGLE URL
# 
crawl_url() {
  local url="$1"

  if [ -z "$url" ]; then
    echo "❌ Error: No URL provided for crawling."
    exit 1
  fi

  RESPONSE=$(curl -s -X POST "https://crawler.algolia.com/api/1/crawlers/${ALGOLIA_CRAWLER_ID}/urls/crawl" \
    -H "Authorization: Basic ${CREDENTIALS}" \
    -H "Content-Type: application/json" \
    -d "{\"urls\": [\"$url\"], \"save\": true}")

  TASK_ID=$(echo "$RESPONSE" | jq -r '.taskId')

  if [ -z "$TASK_ID" ] || [ "$TASK_ID" == "null" ]; then
    echo "❌ Error: Failed to retrieve a valid taskId for URL $url. Please check the response: $RESPONSE"
  fi

  # wait for task to be completed 
  sleep 2

  check_task_status "$TASK_ID" "$CREDENTIALS"
}

# 
# CRAWLS URLS FROM SITEMAP
# 
crawl_sitemap() {
  if [ ! -f "$SITEMAP" ]; then
    echo "❌ Error: Sitemap file not found at $SITEMAP"
    exit 1
  fi

  URLS=$(grep -e loc $SITEMAP | sed 's|<loc>\(.*\)<\/loc>$|\1|g')

  if [ -z "$URLS" ]; then
    echo "❌ Error: No URLs found in the sitemap."
    exit 1
  fi

  for url in $URLS
  do 
    echo "🔄 Crawling URL: $url"
    crawl_url "$url"
  done
}

# 
# UPDATE CRAWLER CONFIGURATION TO START FROM LATEST VERSION AND CRAWLS SITE
# 
crawl_from_latest_version() {
  BASE_URL=$(grep -e loc $SITEMAP | head -1 | sed 's|<loc>\(.*\)<\/loc>$|\1|')

  echo START_URL: $BASE_URL

  # UPDATE CRAWLER CONFIGURATION 
  RESPONSE=$(curl -s -X PATCH "https://crawler.algolia.com/api/1/crawlers/${ALGOLIA_CRAWLER_ID}/config" \
    -H "Authorization: Basic ${CREDENTIALS}" \
    -H "Content-Type: application/json" \
    -d "{\"startUrls\": [\"$BASE_URL/getting-started\"], \"sitemaps\": [\"$BASE_URL/sitemap.xml\"]}")

  TASK_ID=$(echo "$RESPONSE" | jq -r '.taskId')

  # Check if TASK_ID is empty
  if [ -z "$TASK_ID" ]; then
    echo "Error: No task_id extracted. Response: $RESPONSE"
    exit 1  # Exit the function with an error status
  fi

  check_task_status "$TASK_ID"

  crawl_all_site

  echo "✅ Crawling from latest version started successfully."
}

crawl_from_latest_version
