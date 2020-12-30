#!/usr/bin/env bash

npm install
node_modules/.bin/docpad clean
ulimit -S -n 2048
node_modules/.bin/docpad generate
