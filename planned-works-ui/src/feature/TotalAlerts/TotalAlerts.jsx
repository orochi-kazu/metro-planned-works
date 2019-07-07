import React from 'react'

import './style.css'

const AlertsBadge = ({ count, type }) => (
  <span className={`alert ${type}`}>
    {count || '?'}
  </span>
)

const TotalAlerts = ({ alerts }) => (
  <div>
    <AlertsBadge count={alerts.total} type='total' /> alert details
    (<AlertsBadge count={alerts.ingested} type='ingested' /> ingested,
    {` `}<AlertsBadge count={alerts.pending} type='pending' /> pending)
  </div>
)

export { TotalAlerts }
