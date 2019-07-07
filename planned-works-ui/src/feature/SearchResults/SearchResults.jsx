import React from 'react'

import { Alert } from './Alert'

const SearchResults = ({ results, getAlertDetails }) => results.map(it => (
  <Alert {...it} getAlertDetails={getAlertDetails} key={it.id} />
))

export { SearchResults }
