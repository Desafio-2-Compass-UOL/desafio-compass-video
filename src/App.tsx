import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import MyListPage from './pages/MyListPage'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Footer from './components/Foolter/Foolter'
import Search from './components/Search/Search'
// import LoginPage from './pages/LoginPage'

function App() {

  return (
   <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* <Route path='/' element={<LoginPage />} /> */}
        <Route path='home'   element={<Home/>} />
        <Route path='searchpage' element={<SearchPage />} />
        <Route path='mylistpage' element={<MyListPage />} />
      </Routes>
        <img src='https://placehold.co/600x400' alt='imagem improvisada pra eu visualizar melhor a minha parte' />
        <Home />
        <Search />
      <Footer/>
    </BrowserRouter>

   </div>
  )
}
export default App