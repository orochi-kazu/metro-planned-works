import React from 'react'

import './style.css'

const AlertsBadge = ({ count, type }) => (
  <span className={`alert ${type}`}>
    {count}
  </span>
)

const cannedAlerts = { total: 20, ingested: 11, pending: 9 }

const TotalAlerts = ({ alerts = cannedAlerts }) => (
  <div>
    <AlertsBadge count={alerts.total} type='total' /> alerts
    (<AlertsBadge count={alerts.ingested} type='ingested' /> ingested,
    {` `}<AlertsBadge count={alerts.pending} type='pending' /> pending)
  </div>
)

export { TotalAlerts }
