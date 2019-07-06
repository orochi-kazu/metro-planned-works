import { alertDetailsClient, store } from '../api'
import { alerts } from '../domain'

const detailsUrl = process.env.NODE_ENV === 'development'
  ? `${process.env.PUBLIC_URL}/alert_details.json`
  : process.env.REACT_APP_ALERT_DETAILS_URL

const buildDepGraph = async () => {
  const detailsClient = alertDetailsClient(detailsUrl)
  const alertsManager = await alerts({ detailsClient, store })

  return {
    domain: { alerts: alertsManager }
  }
}

export { buildDepGraph }
