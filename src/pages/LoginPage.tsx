import Login   from '../components/Login/Login';
import estilos from './LoginPage.module.css';

const LoginPage = () => {

    return (

        <body className={estilos.login}>
            <Login titulo="Compass Video" 
            subTitulo="Acesse sua conta para ver nossos títulos"  
            msgBotao="INICIAR SESSÃO COM TMDB"
            msgObs={<aside><span>Não tem conta?</span> Acesse como convidado</aside>}
            logoImg="src/assets/imagensLogin/logoCompassUolNegativo2.png"/>
        </body>

    );

}

export default LoginPage;