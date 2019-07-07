import React from 'react'

import './style.css'

const Uningested = () => (
  <div className='outage uningested bordered'>
    Pending
  </div>
)

const Outage = ({ area, from, to }) => (
  <div className='outage bordered'>
    <div className='outage-desc'>&quot;{area.desc}&quot;</div>
    <div>Starts: {from.iso}</div>
    <div>Ends: {to.iso}</div>
  </div>
)

const AlertDetail = ({ id, title, outages, link }) => (
  <div className='detail bordered'>
    <div className='alert-title'>
      <span>
        {title}
        <span className='nowrap'> (<a
          href={link}
          target='_blank' // eslint-disable-line react/jsx-no-target-blank
          rel='noopener'
        >Metro</a>)
        </span>
      </span>
    </div>
    <div>
      {outages ? outages.map((it, i) => <Outage {...it} key={i} />) : <Uningested />}
    </div>
  </div>
)

export { AlertDetail }
