import {useState, useEffect} from 'react';
import estilos from './BotaoLoginTMDB.module.css';

const BotaoLoginTMDB = (props: any) => {

    const [requestToken, setRequestToken] = useState({success: false, request_token: null});

    const handlerRequestToken = (token: object) => {
        setRequestToken(token)
    }


    useEffect(() => {

        if(requestToken.success){
            console.log(requestToken);
            //window.location.href = 'https://www.google.com';
            window.location.href = `https://www.themoviedb.org/authenticate/${requestToken.request_token}`;

        }
        

    },[requestToken]);
    //console.log(requestToken);

    const accessTokenTMDB = import.meta.env.VITE_ACCESS_TOKEN_AUTH;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${accessTokenTMDB}`
        }
    };

    const solicitaTokenTMDB = () => fetch('https://api.themoviedb.org/3/authentication/token/new', options)
    .then(response => response.json())
    .then(response => {handlerRequestToken(response)})
    .catch(err => console.error(err));
    


    //const urlTMDB:any = import.meta.env.VITE_API;
    //const apiTMDB:any = import.meta.env.VITE_API_KEY;

    /*const url:any = `${urlTMDB}top_rated?${apiTMDB}`;
    const testaAcessoAPI = async (url:any) => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }*/

    return(

        <button className={estilos.botaoLoginTMDB} onClick={solicitaTokenTMDB}>
        {props.msgBotao}</button>

    );

}

export default BotaoLoginTMDB;