#!/bin/bash -eu

resource='healthboard_alerts'
op="get_${resource}"
timestamp="`date +%s`000"

today=`gdate --iso-8601`
outfile="${today}/${resource}.json"

mkdir -p ${today}
curl "https://www.metrotrains.com.au/api?op=${op}&_=${timestamp}" > ${outfile}
