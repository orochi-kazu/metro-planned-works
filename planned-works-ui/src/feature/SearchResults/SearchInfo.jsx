import React from 'react'

const SearchInfo = ({ cityLoop, lines, stations, error }) =>
  error ? (
    <div className='results-intro'>
      <div>Something went wrong: {error}</div>
    </div>
  ) : (
    <div className='results-intro'>
      <div>City Loop? {cityLoop ? 'Yes' : 'No'}</div>
      <div>Lines: {(lines || []).join(', ')}</div>
      <div>Stations: {(stations || []).join(', ')}</div>
    </div>
  )

export { SearchInfo }
