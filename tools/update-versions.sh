#!/bin/sh
# Stamp the CSS/JS links in index.html with a short hash of each file's contents,
# e.g. app.js?v=3f9a2c1b, so browsers download a fresh copy whenever a file changes.
#
#   tools/update-versions.sh            hash the files as they are on disk
#   tools/update-versions.sh --staged   hash the versions staged for commit (used by the git hook)
set -e
cd "$(dirname "$0")/.."

for file in style.css app.js; do
  if [ "$1" = "--staged" ]; then
    hash=$(git show ":$file" | git hash-object --stdin | cut -c1-8)
  else
    hash=$(git hash-object "$file" | cut -c1-8)
  fi
  # Replace "file" or "file?v=anything" inside href/src attributes.
  sed -i.bak -E "s#(href|src)=\"${file}(\\?v=[^\"]*)?\"#\\1=\"${file}?v=${hash}\"#" index.html
  rm -f index.html.bak
done
