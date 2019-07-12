# Planned Works visualisation UI

## Getting started

The usual `npm install` and `npm start` :)

## Roadmap

- [ ] Dev workflow
  - [x] Commitizen
  - [x] Linter
  - [x] Husky
  - [x] Pre-commit hook: lint & test
  - [x] Unit tests
  - [ ] Functional tests
  - [x] Deploy script
  - [ ] CI for test, build, and deploy

- [ ] MVP Features
  - [ ] Results list for search (by single-line start & end stations)
    - [x] Load JSON file
    - [x] Search inputs
    - [x] Determine single-line station range
    - [ ] Match alerts
    - [x] List alerts with links to source webpage
  - [x] Search query params, so people can share links
    - [x] Update query on submit
    - [x] Fill search fields from query on load
  - [ ] Calendar view of results
    - [ ] *needs breakdown*

- [ ] Stretch Features
  - [ ] Typeahead on search inputs
  - [ ] Current alert count
  - [ ] Current alert count per line?
  - [ ] Indicator for pending alert ingestion
  - [ ] Automated detection of new alerts
  - [ ] Crowdsourced ingestion of new alerts
  - [ ] Summary of currently (un)affected lines
  - [ ] Stats for alert count, update frequency, line alert density
  - [ ] Automated ingestion of new alerts
  - [ ] Search by network-wide stations, not just single-line
