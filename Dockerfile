FROM node:dubnium-stretch-slim

ENV BABEL_DISABLE_CACHE=1

# Add Tini
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

RUN mkdir -p /chi
WORKDIR /chi

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
 && apt-get update \
 && apt-get install -y ./google-chrome-stable_current_amd64.deb expect\
 && apt-get clean \
 && rm ./google-chrome-stable_current_amd64.deb

RUN mkdir /tmp/{chi,custom-elements}
COPY package_chi.json /tmp/chi/package.json
COPY package_custom-elements.json /tmp/custom-elements/package.json

RUN  cd /tmp/chi \
 && yarn install \
 && cd /tmp/custom-elements \
 && yarn install \
 && yarn cache clean

COPY entrypoint.sh /
ENTRYPOINT ["/tini", "--", "/entrypoint.sh"]
