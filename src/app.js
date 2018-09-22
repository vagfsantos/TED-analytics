import React from 'react'
import ReactDOM from 'react-dom'

import './app.scss'
import ted from './images/ted.png'

ReactDOM.render(
  <div>
    <h1>TED <small>analytics</small></h1>
    {  
      // TODO: <img src="./images/ted.png" alt="TED" />
    }
    <img src={ted} alt="TED" />
  </div>,
  document.querySelector('#app')
)
