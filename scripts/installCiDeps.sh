#!/usr/bin/env bash
set -euo pipefail

IMAGE="node:22"
ARCH="amd64"
TMP_DIR="$(mktemp -d)"

echo "Using temp dir: $TMP_DIR"

# Copy only the minimal files needed
cp package.json "$TMP_DIR/"
[ -f package-lock.json ] && cp package-lock.json "$TMP_DIR/"

docker run --rm \
  --platform "linux/$ARCH" \
  -v "$TMP_DIR:/app" \
  -w /app \
  "$IMAGE" \
  bash -c "npm install --package-lock-only"

# Copy the generated lockfile back
cp "$TMP_DIR/package-lock.json" ./package-lock.json

# Cleanup
rm -rf "$TMP_DIR"

echo "✅ package-lock.json generated using linux/$ARCH"
