FROM node:dubnium
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
ENV BABEL_DISABLE_CACHE=1

RUN apt-get update
RUN apt-get install -y build-essential libssl-dev curl wget

# install chrome
#RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install -y gconf-service libasound2 libatk1.0-0 libcairo2 libcups2 libfontconfig1 libgdk-pixbuf2.0-0 \
                       libgtk-3-0 libnspr4 libpango-1.0-0 libxss1 fonts-liberation libappindicator1 libnss3 xdg-utils \
                       libappindicator3-1 lsb-release
#RUN dpkg -i google-chrome-stable_current_amd64.deb

RUN mkdir /app
WORKDIR /app

COPY .npmrc package.json ./
RUN npm install
COPY .babelrc .eslintrc.json .jshintrc .sass-lint.yml backstop-responsive.json backstop-non-responsive.json gulpfile.babel.js ./

RUN chmod a+rwx /app \
    && chmod a+rw /app/* \
    && chmod a+rw /app/.*
RUN mkdir /app/public \
    && chmod a+rwx /app/public
