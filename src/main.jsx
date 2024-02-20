import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { InvitationApp } from './InvitationApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'
import './sass/app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <InvitationApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
