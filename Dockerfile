FROM ubuntu:16.04
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
ENV BABEL_DISABLE_CACHE=1

RUN apt-get update \
    && apt-get install -y build-essential libssl-dev curl wget

# install node 7
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs

# install chrome headless
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update -qqy \
    && apt-get -qqy install google-chrome-stable \
    && rm /etc/apt/sources.list.d/google-chrome.list \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

RUN mkdir /app
WORKDIR /app

COPY .npmrc package.json ./
RUN npm install
COPY .babelrc .eslintrc.json .jshintrc .sass-lint.yml backstop.json gulpfile.babel.js ./

RUN chmod a+rwx /app \
    && chmod a+rw /app/* \
    && chmod a+rw /app/.*
RUN mkdir /app/public \
    && chmod a+rwx /app/public
