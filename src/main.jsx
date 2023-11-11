import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherContextProvider } from './context/WeatherContext.jsx'
import { MenuContextProvider } from './context/MenuContext.jsx'
import { FormContextProvider } from './context/FormContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherContextProvider>
      
      <MenuContextProvider>
      <FormContextProvider>
      <App />
      </FormContextProvider>
      </MenuContextProvider>
    </WeatherContextProvider>
  </React.StrictMode>,
)
