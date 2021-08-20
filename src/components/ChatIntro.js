import React from 'react';
import './ChatIntro.css'
import imgLogo from '../image/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg'

export default () =>{
    return(
        <div className="chatIntro">
            <img src={imgLogo} alt="logo"/>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu celular parasincronizar suas mensagens.<br/> Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi.</h2>
        </div>
    )
}