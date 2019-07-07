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
  alerts: it.alerts,
  line: it.line_name,
  plannedWorks: it.planned_works_list
})

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
    lastUpdated: () => store.lastUpdated()
  }
}

export { alerts }
