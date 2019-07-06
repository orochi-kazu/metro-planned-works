import React, { Component } from 'react'

import { Header, Footer } from './feature/bookends'
import { EmptyContent } from './feature/EmptyContent'
import './App.css'

import { buildDepGraph } from './config'
let alertsManager = null

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alertCounts: {},
      lastUpdated: 'Unknown'
    }

    buildDepGraph().then(graph => {
      alertsManager = graph.domain.alerts

      this.setState({
        lastUpdated: alertsManager.lastUpdated(),
        alertCounts: alertsManager.alertCounts()
      })
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <div className='content'>
          <EmptyContent />
        </div>
        <Footer alerts={this.state.alertCounts} lastUpdate={this.state.lastUpdated} />
      </div>
    )
  }
}

export { App }
