import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from './components/Chart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/chart' element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
