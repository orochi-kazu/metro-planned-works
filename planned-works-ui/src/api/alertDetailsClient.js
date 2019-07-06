const alertDetailsClient = detailsLocation => ({
  fetch: () => fetch(detailsLocation).then(response => response.json())
})

export { alertDetailsClient }
