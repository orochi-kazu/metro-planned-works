import React, { Component } from 'react'

import './style.css'

const StationSelect = ({ initial, placeholder, onChange, extraClass }) => (
  <input {...{
    className: `search ${extraClass} bordered radius-m`,
    name: placeholder.toLowerCase(),
    type: 'text',
    value: initial,
    placeholder,
    onChange
  }} />
)

const SearchButton = () => (
  <input className='search end bordered radius-m' type='submit' value='Search' />
)

class SearchBar extends Component {
  constructor (props) {
    super(props)

    const { src, dst } = this.props
    this.state = { src, dst }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (props) {
    const { src, dst } = props
    this.setState({ src, dst })
  }

  handleChange (key) {
    return (event) => {
      this.setState({
        [key]: event.target.value
      })
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    const { src, dst } = this.state
    window.history.pushState(null, '', `?src=${src}&dst=${dst}`)
    this.props.search(src, dst)
  }

  render () {
    return (
      <form className='search' onSubmit={this.handleSubmit}>
        <StationSelect
          initial={this.state.src}
          placeholder='Origin'
          onChange={this.handleChange('src')}
          extraClass='start'
        />
        <StationSelect
          initial={this.state.dst}
          placeholder='Destination'
          onChange={this.handleChange('dst')}
          extraClass='middle'
        />
        <SearchButton />
      </form>
    )
  }
}

export { SearchBar }
