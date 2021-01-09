#!/bin/bash
set -e
DIR=$(pwd)
ZIPPATH=${DIR}/assets/lambda.zip

cd confidential-claus-lambda
npm i
npm run build

cd dist
echo "Zipping dist/"
zip -FS $ZIPPATH * > /dev/null

cd ..
echo "Zipping node_modules/"
zip -r $ZIPPATH node_modules/ > /dev/null

cd $DIR
