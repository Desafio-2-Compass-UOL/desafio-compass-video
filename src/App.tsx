import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'

function App() {

  /*return (
   <div className="App">
    <h2>Movie</h2>
    <Header />
    <Login/>
   </div>
  )*/

  return (
   <div className="teste">
    <Login titulo="Compass Video" 
           subTitulo="Acesse sua conta para ver nossos títulos"  
           msgBotao="INICIAR SESSÃO COM TMDB"
           msgObs={<aside><span>Não tem conta?</span> Acesse como convidado</aside>}
           logoImg="src/assets/imagens/logoCompassUolNegativo.png"/>
   </div>
  )

}

export default App
