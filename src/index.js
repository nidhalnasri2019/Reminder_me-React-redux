import React from  'react'
import ReacDOM from 'react-dom'
import App from './compoments/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reminders from './reducers'

import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';


 const store = createStore(reminders)
ReacDOM.render(
    <Provider store ={store}>
     <App />
    </Provider>,
    document.getElementById('root')
)