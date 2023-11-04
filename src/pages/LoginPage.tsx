import Login from '../components/Login/Login';
import estilos from './LoginPage.module.css';

const LoginPage = () => {

    return (

        <section className={estilos.fundo}>
            <Login titulo="Compass Video" 
            subTitulo="Acesse sua conta para ver nossos títulos"  
            msgBotao="INICIAR SESSÃO COM TMDB"
            msgObs={<aside><span>Não tem conta?</span> Acesse como convidado</aside>}
            logoImg="src/assets/imagensLogin/logoCompassUolNegativo.png"/>
        </section>

    );

}

export default LoginPage;