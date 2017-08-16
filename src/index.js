import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Router } from './components/router'
import registerServiceWorker from './registerServiceWorker'

const Main = (props) => {
  return (
    <Router>
      <App />
    </Router>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
