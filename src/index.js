import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import App2 from './app2'
import App3 from './Api'

ReactDOM.render(<App2 />, document.getElementById('root2'))
ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<App3 />, document.getElementById('root3'))