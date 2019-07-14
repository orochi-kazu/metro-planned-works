const idMapToList = map => Object.keys(map)
  .map(it => ({
    ...map[it],
    id: it
  }))

const idListToMap = list => Object.fromEntries(
  list.map(it => [it.id, it])
)

const convertAlerts = it => ({
  id: it.id,
  line: it.line_name,
  plannedWorks: it.planned_works_list
})

const alertsForLines = (alerts, lines) => alerts.filter(it => (lines || []).includes(it.line))

const detailIdsForAlerts = alerts => Array.from(new Set(
  alerts.flatMap(it => it.plannedWorks.flatMap(it => it.id))
))

const alertsFilteredByDetailIds = (alerts, detailIds) => alerts
  // filter out unmatched alert ids
  .map(lineAlert => ({
    ...lineAlert,
    plannedWorks: lineAlert.plannedWorks.filter(works => detailIds.includes(works.id))
  }))
  // filter out empty alerts
  .filter(it => it.plannedWorks.length > 0)

const alertsForLinesStations = (alerts, lines, stations) => {
  // find alerts for all lines
  const linesAlerts = alertsForLines(alerts, lines)
  const detailIds = detailIdsForAlerts(linesAlerts)

  // filter to alerts with intersection
  const linesStationsAlerts = alertsFilteredByDetailIds(linesAlerts, detailIds)
  return linesStationsAlerts
}

const alerts = async ({ healthboardClient, detailsClient, store }) => {
  const [healthboard, details] = await Promise.all([
    healthboardClient.fetch(),
    detailsClient.fetch()
  ])
  const healthboardAlerts = idMapToList(healthboard).map(convertAlerts)
  const alertDetails = { ...details, alerts: idListToMap(details.alerts) }
  store.save({ healthboardAlerts, alertDetails })

  return {
    alerts: () => store.alerts(),
    alertCounts: () => store.alertCounts(),
    alertDetails: id => store.alertDetails(id),
    lastUpdated: () => store.lastUpdated(),
    lastSync: () => store.lastSync(),
    alertsForLinesStations: (lines, stations) =>
      alertsForLinesStations(store.alerts(), lines, stations)
  }
}
const __test__ = {
  alertsForLines,
  detailIdsForAlerts
}

export { alerts, __test__ }
