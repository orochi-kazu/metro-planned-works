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
      alertCounts: {},
      lastUpdated: 'Unknown',
      alerts: [],
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
        alertCounts: alertsManager.alertCounts(),
        // alerts: alertsManager.alerts(),
        getAlertDetails: alertsManager.alertDetails,
        search: graph.domain.search.search
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

  search (a, b) {
    this.setState({ src: a, dst: b })
    const searchInfo = this.state.search(a, b)
    this.setState({ searchInfo })
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
        <Footer alerts={this.state.alertCounts} lastUpdate={this.state.lastUpdated} />
      </div>
    )
  }
}

export { App }
