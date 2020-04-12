#!/bin/sh

set -e


NAME=emscripten-lame

docker build . \
    -t johncalvinroberts/$NAME \
    -t johncalvinroberts/$NAME:`date +%Y-%m-%d` \
    -f ./Dockerfile \

docker push johncalvinroberts/$NAME
