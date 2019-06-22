# Planned Works ingestion pipeline

## Getting started

Run scripts from the `ingest` dir. Diff between days, etc, to detect changes :)

In order:

```bash
./fetch_today.sh
./extract_today_links.sh
./fetch_today_details.sh
```

## Roadmap

- [ ] Ingest Dev workflow
  - [ ] Deploy script (in conjunction with the UI's expected data location)
  - [ ] Crontab scripts for daily fetch
  - [ ] Replace data source with public & documented API (if/when it exists)
