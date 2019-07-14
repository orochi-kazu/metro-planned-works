import React, { Component } from 'react'

import { Header, Footer } from './feature/bookends'
import { EmptyContent } from './feature/EmptyContent'
import { SearchResults, SearchInfo } from './feature/SearchResults'
import './App.css'

import { buildDepGraph } from './config'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lastSync: 'Unknown',
      lastUpdated: 'Unknown',
      alertCounts: {},
      alerts: [],
      alertsForLinesStations: () => null,
      getAlertDetails: () => null,
      search: null,
      searchInfo: null,
      src: '',
      dst: ''
    }

    this.loadQuerySearch = this.loadQuerySearch.bind(this)
    this.search = this.search.bind(this)

    window.onpopstate = this.loadQuerySearch
  }

  componentDidMount () {
    buildDepGraph().then(graph => {
      const alertsManager = graph.domain.alerts
      this.setState({
        lastUpdated: alertsManager.lastUpdated(),
        lastSync: alertsManager.lastSync(),
        alertCounts: alertsManager.alertCounts(),
        // alerts: alertsManager.alerts(),
        getAlertDetails: alertsManager.alertDetails,
        search: graph.domain.search.search,
        alertsForLinesStations: alertsManager.alertsForLinesStations
      })
      this.loadQuerySearch()
    })
  }

  loadQuerySearch () {
    const params = new URL(window.location).searchParams
    const [src, dst] = ['src', 'dst'].map(it => params.get(it) || '')
    this.search(src, dst)
  }

  search (src, dst) {
    this.setState({ src, dst })
    if (src === '' || dst === '') {
      this.setState({ searchInfo: null, alerts: [] })
      return
    }
    const searchInfo = this.state.search(src, dst)
    this.setState({ searchInfo })
    const alerts = this.state.alertsForLinesStations(searchInfo.lines, searchInfo.stations)
    this.setState({ alerts })
  }

  render () {
    return (
      <div className='App'>
        <Header search={this.search} src={this.state.src} dst={this.state.dst} />
        <div className='content'>
          {this.state.searchInfo ? <SearchInfo {...this.state.searchInfo} /> : null}
          {(this.state.alerts || []).length > 0 ? (
            <SearchResults
              alerts={this.state.alerts}
              getAlertDetails={this.state.getAlertDetails}
            />
          ) : (
            <EmptyContent />
          )}
        </div>
        <Footer
          alerts={this.state.alertCounts}
          lastSync={this.state.lastSync}
          lastUpdate={this.state.lastUpdated}
        />
      </div>
    )
  }
}

export { App }
