import React from 'react'

import './style.css'

const Uningested = () => (
  <div className='outage uningested bordered'>
    Pending
  </div>
)

const Outage = ({ area, from, to }) => (
  <div className='outage bordered'>
    <div>{area}</div>
    <div>Starts: {from.iso}</div>
    <div>Ends: {to.iso}</div>
  </div>
)

const AlertDetail = ({ id, outages, link }) => (
  <div className='detail bordered'>
    <div className='alert-title'>
      <span>{id}</span>
      <span><a href={link} target='_blank' rel='noopener noreferrer'>Metro</a></span>
    </div>
    <div>
      {outages ? outages.map((it, i) => <Outage {...it} key={i} />) : <Uningested />}
    </div>
  </div>
)

export { AlertDetail }
