const alerts = async ({ detailsClient, store }) => {
  const details = await detailsClient.fetch()
  store.save(details)

  return {
    lastUpdated: () => store.lastUpdated(),
    alertCounts: () => store.alertCounts(),
    alertDetails: () => store.alerts()
  }
}

export { alerts }
