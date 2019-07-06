import React from 'react'

import './style.css'

const LastUpdate = ({ lastUpdate }) => (
  <div>
    Last updated: <span className='updated'>{lastUpdate}</span>
  </div>
)

export { LastUpdate }
