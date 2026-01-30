FROM backstopjs/backstopjs:latest

ENV PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers
WORKDIR /backstopjs

RUN apt-get update -y && apt-get install -y zip

COPY ./backstop_data/docker/package.json /backstopjs/package.json

# Install Playwright to the exact version Backstop needs
RUN npm install
RUN npm install -g playwright@~1.51.0 \
  & npx playwright@~1.51.0 install chromium

COPY backstop-non-responsive-ce.json \ 
  backstop-non-responsive.json  \
  backstop-responsive.json \
  /backstopjs/

COPY scripts/ /backstopjs/scripts/

ENTRYPOINT ["bash", "./scripts/tests/visualTests.sh"]

