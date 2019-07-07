let alerts = []

let details = {
  alerts: {},
  fetchDate: '',
  releaseDate: ''
}

const calculateAlertCounts = () => {
  const keys = Object.keys(details.alerts)
  const total = keys.length
  const ingested = keys.map(k => details.alerts[k]).filter(it => it.outages).length
  const pending = total - ingested

  return { total, ingested, pending }
}

const store = {
  save: ({ healthboardAlerts, alertDetails }) => {
    alerts = healthboardAlerts
    details = alertDetails
  },
  alerts: () => alerts,
  alertCounts: () => calculateAlertCounts(),
  alertDetails: id => details.alerts[id],
  lastUpdated: () => details.releaseDate
}

export { store }
