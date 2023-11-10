import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherContextProvider } from './context/WeatherContext.jsx'
import { MenuContextProvider } from './context/MenuContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <MenuContextProvider>
      <App />
      </MenuContextProvider>
    </WeatherContextProvider>
  </React.StrictMode>,
)
