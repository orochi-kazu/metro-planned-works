import React from 'react'

import { AlertDetail } from './AlertDetail'

const SearchResults = ({ results }) => results.map(it => <AlertDetail {...it} key={it.id} />)

export { SearchResults }
