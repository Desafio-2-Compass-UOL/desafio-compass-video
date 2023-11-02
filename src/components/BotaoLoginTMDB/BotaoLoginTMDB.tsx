import estilos from './BotaoLoginTMDB.module.css';

const BotaoLoginTMDB = (props: any) => {

    return(

        <button className={estilos.botaoLoginTMDB}>{props.msgBotao}</button>

    );

}

export default BotaoLoginTMDB;