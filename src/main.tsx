import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.tsx'

import './index.css'

import MyListPage from './pages/MyListPage.tsx'
import Header from './components/Header/Header.tsx'
import SearchPage from './pages/SearchPage.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='mylistpage' element={<MyListPage />} />
          <Route path='searchpage' element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
