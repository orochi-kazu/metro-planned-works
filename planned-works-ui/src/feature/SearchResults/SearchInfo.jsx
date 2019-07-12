import React from 'react'

const SearchInfo = ({ cityLoop, lines, stations }) =>
  (lines || {}).error ? (
    <div className='results-intro'>
      <div>Something went wrong: {lines.error}</div>
    </div>
  ) : (
    <div className='results-intro'>
      <div>City Loop? {cityLoop ? 'Yes' : 'No'}</div>
      <div>Lines: {((lines || {}).lines || []).join(', ')}</div>
      <div>Stations: {stations}</div>
    </div>
  )

export { SearchInfo }
