import React from 'react'

import './style.css'

const LastUpdate = ({ lastSync, lastUpdate }) => (
  <div>
    Alerts Synced: <span className='updated'>{lastSync}</span>,
    Last updated: <span className='updated'>{lastUpdate}</span>
  </div>
)

export { LastUpdate }
