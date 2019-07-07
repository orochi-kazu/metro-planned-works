const getJsonClient = url => ({
  fetch: () => fetch(url).then(response => response.json())
})

export { getJsonClient }
