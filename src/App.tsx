import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import MyListPage from './pages/MyListPage'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Footer from './components/Foolter/Foolter'
// import Home from './pages/Home'

function App() {

  return (
   <div className="App">
   
    <BrowserRouter>
    <Header />
      <Routes>
        {/* <Route path='home' element={<Home />} /> */}
        <Route path='searchpage' element={<SearchPage />} />
        <Route path='mylistpage' element={<MyListPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    <section> 
      <img src='https://placehold.co/600x400' alt='imagem improvisada pra eu visualizar melhor a minha parte' />
    </section>
    <section className='home'>
      <Home />
   </section>
   </div>

  )
}
export default App
