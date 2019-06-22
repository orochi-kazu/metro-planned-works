# Planned Works visualisation

All the info on Metro's [Planned Works](https://www.metrotrains.com.au/planned-works/)
sub-site is important, but aggressively difficult to reason about.

This is one kind of visualisation that I've found useful in the past.
I have previously converted relevant alerts into a spreadsheet by hand, and while not too
challenging, it *is* very time consuming, and not widely useful/accessible to other people.

Until now.

## Getting started

You're in the right place!

Also check out the sub-project readme files :)

## Architecture

### Front-end

This is a `create-react-app` codebase. It is intended to be deployed as an in-browser
single-page app.

### Back-end

To minimise moving parts, there is currently no API service/app/codebase.
The API is just a JSON file.

This JSON file is currently hand-edited, because I couldn't find a public API with
machine-readable information.

But don't despair. In `ingest` there are some helper scripts to pull down and transform relevant
JSON and HTML. The manual bit is in converting free text in the HTML into canonical dates.

## Product roadmap

- [ ] MVP Features
  - [ ] Results list for search (by single-line start & end stations)
  - [ ] Calendar view of results
- [ ] Stretch Features
  - [ ] Indicator for pending alert ingestion
  - [ ] Automated detection of new alerts
  - [ ] Crowdsourced ingestion of new alerts
  - [ ] Summary of currently (un)affected lines
  - [ ] Stats for alert count, update frequency, line alert density
  - [ ] Automated ingestion of new alerts
  - [ ] Search by network-wide stations, not just single-line

(More detailed feature checklists and task lists in each sub-project.)

## Contributing

Happy to accept contributions, but please let's get on the same page before anyone goes to a lot
of effort.

If it's small, just fork & make a PR. If it might be big, hmu.

## Licence

```
Planned Works Visualisation (working title)
Copyright (C) 2019  Orochi Kazuaki

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the [GNU Affero General Public License](LICENSE)
along with this program.  If not, see [https://www.gnu.org/licenses/].
```

## Disclaimer & notes

It's more explicit and general in the licence, but specifically:

This is intended to help, but cannot be expected to be reliable at this stage.
The data may be out of date or incorrect, due to manual processes, and dependencies on
input data from Metro.
Furthermore, data from said sources may be ambiguous, incorrect, misleading, or untimely.

I don't own any data, I only authored this software.
