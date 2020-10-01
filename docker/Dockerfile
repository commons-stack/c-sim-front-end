# Build stage
FROM node:12-alpine as build-stage

# Set working directory
WORKDIR /var/www/application

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps
