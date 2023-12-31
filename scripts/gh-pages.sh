#!/bin/bash
SCRIPT=`basename $0 | tr abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ`

echo -e "$SCRIPT: BEGIN `date`"

if [ ! -e 'package.json' ]; then
  echo -e "$SCRIPT: package.json not found in current folder (ERROR)"
  exit 911
fi

git checkout main
git status | grep "up to date"; RC=$?
# set -e # exit on error
if [ "$RC" != "0" ]; then
  git status
  echo "$SCRIPT: ERROR: local changes have not been pushed"
  exit 1
fi

echo -e "$SCRIPT: generating static build..."
npm run build:dist

echo -e "$SCRIPT git checkout gh-pages"
git checkout gh-pages; git pull
BRANCH=`git rev-parse --abbrev-ref HEAD`
if [ "$BRANCH" != "gh-pages" ]; then
  echo -e "$SCRIPT: ERROR could not checkout gh-pages"
  exit -1
fi
echo -e "$SCRIPT: git branch: $BRANCH"

echo -e "$SCRIPT: removing existing content"
rm -rf assets img 

echo -e "$SCRIPT: copying new content"
cp -r dist/* .
ls -l

echo -e "$SCRIPT: git add"
git add .

git status | grep 'nothing to commit' > /dev/null; RC=$?
if [ "$RC" != "0" ]; then
  echo -e "$SCRIPT: git commit"
  git commit -m "gh-pages"
  echo -e "$SCRIPT: git push"
  git push
  echo -e "$SCRIPT: github updated"
  git checkout main
else
  echo "$SCRIPT: Nothing to commit"
fi

echo -e "$SCRIPT: END `date`"
