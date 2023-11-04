import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header     from './components/Header/Header'
import MyListPage from './pages/MyListPage'
import SearchPage from './pages/SearchPage'
import LoginPage  from './pages/LoginPage'


function App() {

  return (
   <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/'          element={<LoginPage />} />
        <Route path='prevhome'   element={<Header    />} />
        <Route path='searchpage' element={<SearchPage />} />
        <Route path='mylistpage' element={<MyListPage />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}
export default App
//<Route path='/' element={<Header />} />