import { getJsonClient, store } from '../api'
import { alerts } from '../domain'

const publicJson = filename => process.env.NODE_ENV === 'development'
  ? `${process.env.PUBLIC_URL}/${filename}.json`
  : process.env[`REACT_APP_${filename.toUpperCase()}_URL`]

const healthboardUrl = publicJson('healthboard_alerts')
const detailsUrl = publicJson('alert_details')

const buildDepGraph = async () => {
  const healthboardClient = getJsonClient(healthboardUrl)
  const detailsClient = getJsonClient(detailsUrl)
  const alertsManager = await alerts({ healthboardClient, detailsClient, store })

  return {
    domain: { alerts: alertsManager }
  }
}

export { buildDepGraph }
