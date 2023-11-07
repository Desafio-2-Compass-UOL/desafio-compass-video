import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/****INSERIDO PARA TESTE ****/
//import Login from './components/Login/Login.tsx';

/*************************************************/

/*ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login titulo="Compass Video" 
           subTitulo="Acesse sua conta para ver nossos títulos"  
           msgBotao="INICIAR SESSÃO COM TMDB"
           msgObs={<aside><span>Não tem conta?</span> Acesse como convidado</aside>}
           logoImg="src/assets/imagens/logoCompassUolNegativo.png"/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)*/


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
