FROM node:14

ENV BABEL_DISABLE_CACHE=1

RUN mkdir -p /old-chi
WORKDIR /chi

# Add Tini
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

# TESTS
RUN apt-get update \ 
 && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN wget https://www.slimjet.com/chrome/download-chrome.php?file=files%2F71.0.3578.80%2Fgoogle-chrome-stable_current_amd64.deb -O google-chrome-stable_current_amd64.deb \
 && apt-get update \
 && apt-get install -y ./google-chrome-stable_current_amd64.deb expect libgconf-2-4 xvfb busybox \
 && apt-get clean \
 && rm ./google-chrome-stable_current_amd64.deb

RUN mkdir /tmp/{chi,custom-elements,documentation}
COPY package_chi.json /tmp/chi/package.json
COPY package_custom-elements.json /tmp/custom-elements/package.json
COPY package_documentation.json /tmp/documentation/package.json

RUN  cd /tmp/chi && yarn install \
 && cd /tmp/custom-elements && yarn install \
 && yarn cache clean

# START
COPY entrypoint.sh /
ENTRYPOINT ["/tini", "--", "/entrypoint.sh"]