import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useRef, useEffect} from "react";

const LoginPage = ({setPage}) => {

    const nav = useNavigate()

    const inputEmail = useRef()
    const inputPassword1 = useRef()


    useEffect(() => {
        setPage("login")
    }, [])


    function toRegister() {
        if(inputEmail.current.value.length > 0 && inputPassword1.current.value.length > 0) {
            nav("/home")
        }

    }

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="d-flex j-center">
                <div className="d-flex column inputs">
                    <input ref={inputEmail} type="text" placeholder="email"/>
                    <input ref={inputPassword1} type="text" placeholder="password one"/>
                    <button onClick={toRegister}>Submit</button>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;