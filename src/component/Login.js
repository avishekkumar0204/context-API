import React from 'react'
import LoginContext from '../context/LoginContext'
import { useContext } from 'react'
export default function Login() {
    const loginState = useContext(LoginContext);
    const onClickHandler=()=>{
        loginState.update();
    }
    return (
        <>
            <div>Roll:{loginState.detail.roll}</div>
            <div>Name:{loginState.detail.name}</div>

            <button onClick={onClickHandler}>Change</button>
        </>
    )
}

