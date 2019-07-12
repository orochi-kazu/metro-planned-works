import React from 'react'

import { AlertDetail } from '../AlertDetail'

import './style.css'

const detailById = getAlertDetails => (id, title) => {
  const detail = getAlertDetails(id)
  return detail ? <AlertDetail {...detail} title={title} key={id} /> : null
}

const Alert = ({ id, alerts, line, plannedWorks, getAlertDetails }) => {
  if (!plannedWorks) {
    return null
  }
  const getDetail = detailById(getAlertDetails)
  return (
    <div className='alert-summary bordered radius-m'>
      <div className='alert-summary-title'>
        <span className='alert-summary-title'>{line || 'Unnamed line'}</span>
        {line ? '' : <span>&nbsp;({id})</span>}
      </div>
      {plannedWorks.map(it => getDetail(it.id, it.title))}
    </div>
  )
}

export { Alert }
