let details = {
  fetchDate: 'Unknown',
  releaseDate: 'Unknown',
  alerts: []
}

const calculateAlertCounts = () => {
  const total = details.alerts.length
  const ingested = details.alerts.filter(it => it.outages).length
  const pending = total - ingested

  return { total, ingested, pending }
}

const store = {
  save: alertDetails => { details = alertDetails },
  lastUpdated: () => details.releaseDate,
  alertCounts: () => calculateAlertCounts()
}

export { store }
