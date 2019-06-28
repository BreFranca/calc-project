import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import Calculator from "./containers/Calculator"
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>
, document.getElementById('root'));
serviceWorker.unregister();
