import React from 'react'

import { Alert } from './Alert'

const SearchResults = ({ alerts, getAlertDetails }) => alerts.map(it => (
  <Alert {...it} getAlertDetails={getAlertDetails} key={it.id} />
))

export { SearchResults }
