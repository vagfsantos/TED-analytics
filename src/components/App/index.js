import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from '../Header'

import ted from '../../images/ted.png'

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
      </>
    )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#app')
)
