import React from 'react'

import { AlertDetail } from '../AlertDetail'

import './style.css'

const detailById = getAlertDetails => id => {
  const detail = getAlertDetails(id)
  return detail ? <AlertDetail {...detail} key={id} /> : null
}

const Alert = ({ id, alerts, line, plannedWorks = [], getAlertDetails }) => {
  const getDetail = detailById(getAlertDetails)
  return (
    <div className='alert-summary bordered'>
      <div className='alert-summary-title'>
        <span className='alert-summary-title'>{line || 'Unnamed line'}</span>
        {line ? '' : <span>&nbsp;({id})</span>}
      </div>
      {plannedWorks.map(it => getDetail(it.id))}
    </div>
  )
}

export { Alert }
