import React from 'react'

import { SearchBar } from '../SearchBar'
import './style.css'

const Header = ({ search }) => (
  <header>
    <span className='title'><span className='icon'>⚠</span> Legible Works</span>
    <SearchBar search={search} />
  </header>
)

export { Header }
