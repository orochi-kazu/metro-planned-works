import React from 'react'

import './style.css'

const cannedDate = '2019-06-16'

const LastUpdate = ({ lastUpdate = cannedDate }) => (
  <div>
    Last updated: <span className='updated'>{cannedDate}</span>
  </div>
)

export { LastUpdate }
