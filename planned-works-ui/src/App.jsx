import React from 'react'

import { Header, Footer } from './feature/bookends'
import { EmptyContent } from './feature/EmptyContent'
import './App.css'

const App = () => (
  <div className='App'>
    <Header />
    <div className='content'>
      <EmptyContent />
    </div>
    <Footer />
  </div>
)

export { App }
