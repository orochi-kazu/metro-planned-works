#!/bin/bash -eu

today=`gdate --iso-8601`

pushd ${today}

inresource='healthboard_alerts'
infile="${inresource}.json"

outresource='alert_links'
outfile="${outresource}.json"

cat ${infile} | jq '[
  .[].planned_works_list | [
    .[]? | { key: .id | tostring, value: .link }
  ] | from_entries
] | add' > ${outfile}

popd
