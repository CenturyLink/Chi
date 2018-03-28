FROM ubuntu:16.04
ENV BABEL_DISABLE_CACHE=1

RUN apt-get update
RUN apt-get install -y build-essential libssl-dev curl wget

# install node 7
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs

RUN mkdir /app
WORKDIR /app

COPY .npmrc package.json ./
RUN npm install
COPY .babelrc .eslintrc.json .jshintrc .sass-lint.yml gulpfile.babel.js ./

RUN chmod a+rwx /app \
    && chmod a+rw /app/* \
    && chmod a+rw /app/.*
RUN mkdir /app/public \
    && chmod a+rwx /app/public
