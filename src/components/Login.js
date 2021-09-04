/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Api from '../Api';
import './Login.css';

export default ({onReceive}) =>{
    const handleGoogleLogin = async () =>{
        let result = await Api.googleLogin();
        if(result){
            onReceive(result.user);
        } else{
            alert("Erro!");
        }
    }


    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="logoGoogle"></img>
            <button onClick={handleGoogleLogin} className="login--btn">Logar com Google</button>
        </div>
    )
}