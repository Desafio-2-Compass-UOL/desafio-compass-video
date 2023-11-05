import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import MyListPage from './pages/MyListPage'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Footer from './components/Foolter/Foolter'
// import LoginPage from './pages/LoginPage'

function App() {

  return (
   <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* <Route path='/' element={<LoginPage />} /> */}
        <Route path='home' element={<Home/>} />
        {/* <Route path='series' element={<Series/>} /> */}
        {/* <Route path='filmes' element={<Filmes/>} /> */}
        {/* <Route path='celebridades' element={<Celebridades/>} /> */}
        <Route path='searchpage' element={<SearchPage />} />
        <Route path='mylistpage' element={<MyListPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  )
}
export default App