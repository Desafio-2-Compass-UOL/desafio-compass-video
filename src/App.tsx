import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import MyListPage from './pages/MyListPage'
import Home from './pages/Home'
import SearchResultsPage from './pages/SearchResultsPage'
import Footer from './components/Foolter/Foolter'
// import LoginPage from './pages/LoginPage'
import HalloweenCollectionPage from './pages/CollectionPage';

function App() {

  return (
   <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* <Route path='/' element={<LoginPage />} /> */}
        <Route path='/' element={<Home/>} />
        {/* <Route path='series' element={<Series/>} /> */}
        {/* <Route path='filmes' element={<Filmes/>} /> */}
        {/* <Route path='celebridades' element={<Celebridades/>} /> */}
        <Route path='searchresultspage' element={<SearchResultsPage />} />
        <Route path='mylistpage' element={<MyListPage />} />
        <Route path='collectionpage' element={<HalloweenCollectionPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  )
}
export default App;