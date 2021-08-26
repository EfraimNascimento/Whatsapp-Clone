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
            <button onClick={handleGoogleLogin}>Logar com facebook</button>
        </div>
    )
}