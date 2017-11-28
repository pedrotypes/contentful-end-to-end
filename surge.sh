#!/bin/bash

#
# Deploy to surge.sh
#

cd dist
cp index.html 200.html
surge -p ./ -d contentful-end-to-end.surge.sh
