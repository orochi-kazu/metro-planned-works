import { getJsonClient, store } from '../api'
import { alerts, stationSearch } from '../domain'

const publicJson = filename => process.env.NODE_ENV === 'development'
  ? `${process.env.PUBLIC_URL}/${filename}.json`
  : process.env[`REACT_APP_${filename.toUpperCase()}_URL`]

const healthboardUrl = publicJson('healthboard_alerts')
const detailsUrl = publicJson('alert_details')
const metroVarsUrl = publicJson('metro_variables')

const healthboardClient = getJsonClient(healthboardUrl)
const detailsClient = getJsonClient(detailsUrl)
const metroVarsClient = getJsonClient(metroVarsUrl)

const buildDepGraph = async () => {
  const dataStore = await store({ metroVarsClient })
  const alertsManager = await alerts({ healthboardClient, detailsClient, store: dataStore })
  const searchManager = stationSearch({ store: dataStore })

  return {
    domain: {
      alerts: alertsManager,
      search: searchManager
    }
  }
}

export { buildDepGraph }
