import BotaoLoginTMDB from '../BotaoLoginTMDB/BotaoLoginTMDB';
import estilos from './Login.module.css';

const Login = (props: any) => {
    
    return(

        <section className={estilos.quadro}>
            <h1>{props.titulo}</h1>
            <h2>{props.subTitulo}</h2>
            <BotaoLoginTMDB msgBotao={props.msgBotao}/>
            {props.msgObs}
            <figure>
                <img src={props.logoImg} width="350" alt="logotipo compass uol"/>
            </figure>
        </section>

    );

}

export default Login;