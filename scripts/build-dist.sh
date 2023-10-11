#!/usr/bin/env sh
DIR=`dirname $0`
SCRIPT=`basename $0 | tr abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ`
APP=$DIR/..
set -e

echo "$SCRIPT: vite build"
vite build

cat > $APP/dist/.gitignore <<CATEOF
local
node_modules
CATEOF
