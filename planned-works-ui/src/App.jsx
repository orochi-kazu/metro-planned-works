import React, { Component } from 'react'

import { Header, Footer } from './feature/bookends'
import { EmptyContent } from './feature/EmptyContent'
import { SearchResults, SearchInfo } from './feature/SearchResults'
import './App.css'

import { buildDepGraph } from './config'
let alertsManager = null

const hooks = [
  'intersectsCityLoop',
  'linesForStations',
  'stationRangeForStations'
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alertCounts: {},
      lastUpdated: 'Unknown',
      alerts: [],
      getAlertDetails: () => null,
      search: null
    }

    this.receiveResult = this.receiveResult.bind(this)
    this.search = this.search.bind(this)
    this.loadQuerySearch = this.loadQuerySearch.bind(this)

    buildDepGraph().then(graph => {
      hooks.forEach(it => {
        graph.domain.search.registerFor[it](this.receiveResult(it))
      })

      alertsManager = graph.domain.alerts
      this.setState({
        lastUpdated: alertsManager.lastUpdated(),
        alertCounts: alertsManager.alertCounts(),
        // alerts: alertsManager.alerts(),
        getAlertDetails: alertsManager.alertDetails,
        search: graph.domain.search
      })

      this.loadQuerySearch()
    })
  }

  loadQuerySearch () {
    const params = new URL(window.location).searchParams
    const [src, dst] = ['src', 'dst'].map(it => params.get(it) || '')
    if (src && dst) {
      this.search(src, dst)
    }
  }

  receiveResult (key) {
    return result => {
      this.setState({
        [key]: result
      })
    }
  }

  search (a, b) {
    hooks.forEach(it => {
      this.state.search[it](a, b)
    })
  }

  render () {
    return (
      <div className='App'>
        <Header search={this.search} />
        <div className='content'>
          {this.state.linesForStations ? (
            <SearchInfo
              cityLoop={this.state.intersectsCityLoop}
              lines={this.state.linesForStations}
              stations={this.state.stationRangeForStations}
            />
          ) : (
            null
          )}
          {(this.state.alerts || []).length > 0 ? (
            <SearchResults
              alerts={this.state.alerts}
              getAlertDetails={this.state.getAlertDetails}
            />
          ) : (
            <EmptyContent />
          )}
        </div>
        <Footer alerts={this.state.alertCounts} lastUpdate={this.state.lastUpdated} />
      </div>
    )
  }
}

export { App }
