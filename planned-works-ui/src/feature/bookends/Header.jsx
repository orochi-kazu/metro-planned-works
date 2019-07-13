import React from 'react'

import { SearchBar } from '../SearchBar'
import './style.css'

const Header = ({ search, src, dst }) => (
  <header>
    <span className='title'><span className='icon'>⚠</span> Legible Works</span>
    <SearchBar {...{ search, src, dst }} />
  </header>
)

export { Header }
