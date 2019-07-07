import React, { Component } from 'react'

import { Header, Footer } from './feature/bookends'
import { EmptyContent } from './feature/EmptyContent'
import { SearchResults } from './feature/SearchResults'
import './App.css'

import { buildDepGraph } from './config'
let alertsManager = null

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alertCounts: {},
      lastUpdated: 'Unknown',
      alerts: [],
      getAlertDetails: () => null
    }

    buildDepGraph().then(graph => {
      alertsManager = graph.domain.alerts

      this.setState({
        lastUpdated: alertsManager.lastUpdated(),
        alertCounts: alertsManager.alertCounts(),
        alerts: alertsManager.alerts(),
        getAlertDetails: alertsManager.alertDetails
      })
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <div className='content'>
          {(this.state.alerts || []).length > 0
            ? (
              <SearchResults
                results={this.state.alerts}
                getAlertDetails={this.state.getAlertDetails}
              />
            )
            : <EmptyContent />
          }
        </div>
        <Footer alerts={this.state.alertCounts} lastUpdate={this.state.lastUpdated} />
      </div>
    )
  }
}

export { App }
