import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import LoadingPage from './pages/LoandingPage'

import Header from './components/Header/Header'
import MyListPage from './pages/MyListPage'
import SearchResultsPage from './pages/SearchResultsPage'
import Footer from './components/Foolter/Foolter'
import LoginPage from './pages/LoginPage'
import HalloweenCollectionPage from './pages/CollectionPage';
import MoviesPage from './pages/MoviesPage'
import Home from './pages/Home'
import TvShowsPage from './pages/TvShowsPage'
// import PrivateRoute from './components/PrivateRoutes/PrivateRoutes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          
          <Route path='LoadingPage' element={<LoadingPage />} />
          <Route path='home'
            element={
              <>
                <Header />
                <Home/>
                <Footer />
              </>     
          } />
          <Route path='moviepage'
            element={
              <>
              <Header />
                <MoviesPage />
              <Footer /> </>
            }/>
          <Route path='series'
            element={
              <>
              <Header />
                <TvShowsPage />
              <Footer /> </>
            }/>
              {/*<Route path='celebrities'
            element={
              <>
              <Header />
                <CelebritiesPage />
              <Footer /> </>
            }/> */}
          <Route path='searchresultspage' 
            element={
              <>
              <Header />
              <SearchResultsPage />
              <Footer />
            </> 
          } />
          <Route path='mylistpage' 
            element={
              <>
              <Header />
              <MyListPage /> 
              <Footer />
            </> 
          } />
          <Route path='collectionpage' 
            element={
            <>
              <Header />
              <HalloweenCollectionPage />
              <Footer />
            </> 
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

//<Route path='LoadingPage' element={<LoginPage />} />
