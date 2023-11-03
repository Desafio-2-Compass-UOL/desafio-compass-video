import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import MyListPage from './pages/MyListPage'
import SearchPage from './pages/SearchPage'


function App() {

  return (
   <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='searchpage' element={<SearchPage />} />
        <Route path='mylistpage' element={<MyListPage />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}
export default App
