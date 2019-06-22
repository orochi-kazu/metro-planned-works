#!/bin/bash -eu

today=`gdate --iso-8601`

pushd ${today}

mkdir -p alert

fetch_detail () {
  id="${1}"
  url="${2}"
  curl ${url} -o alert/${id}.html
}

inresource='alert_links'
infile="${inresource}.json"

for kv in `cat ${infile} | grep ':' | tr -d ', '`; do
  fetch_detail `echo ${kv} | sed 's/":"/ /' | tr -d '""'`
done

popd
