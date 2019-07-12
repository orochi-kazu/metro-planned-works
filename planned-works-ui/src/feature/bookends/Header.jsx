import React from 'react'

import { SearchBar } from '../SearchBar'
import './style.css'

const Header = () => (
  <header>
    <span className='title'><span className='icon'>⚠</span> Legible Works</span>
    <SearchBar />
  </header>
)

export { Header }
