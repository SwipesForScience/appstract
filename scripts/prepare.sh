#!/usr/bin/env bash

# This is a deploy script for travis. it will clone the Swipes for Science code
# and copy the config.js folder in this repo to Swipes for Science.
# then travis will build, then will deploy it on gh-pages
echo 'running git clone'
git clone --depth=50 https://github.com/SwipesForScience/SwipesForScience /tmp/SwipesForScience
echo 'copying config to SwipesForScience'
cp ./config.js /tmp/SwipesForScience/src/config.js
cp -r /tmp/SwipesForScience ./SwipesForScience
cd SwipesForScience
echo 'listing contents of swipes for science:'
ls
echo 'running npm install'
npm install
