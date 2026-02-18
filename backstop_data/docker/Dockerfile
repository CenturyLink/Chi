FROM node:20-bookworm

WORKDIR /backstopjs

RUN apt-get update -y && apt-get install -y --no-install-recommends \
    zip \
    ca-certificates \
    fonts-liberation \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Playwright system dependencies (matches @playwright/browser-chromium in package.json)
RUN npx -y playwright@1.51.1 install --with-deps chromium

ENTRYPOINT ["npm", "run"]
CMD ["tests:visual:run"]
