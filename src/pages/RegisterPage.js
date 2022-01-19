import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useRef, useEffect} from "react";

const RegisterPage = ({setPage}) => {

    const nav = useNavigate()

    const inputEmail = useRef()
    const inputPassword1 = useRef()
    const inputPassword2 = useRef()

    useEffect(() => {
        setPage("register")
    }, [])


    function toLogin() {
        if (inputEmail.current.value !== "" && inputPassword1.current.value !== "" && inputPassword2.current.value !== "") {
            nav("/login")
        }
    }


    return (
        <div className="d-flex j-center">
            <div className="p">
                <h1>Register</h1>

                <div className="d-flex column inputs">
                    <input ref={inputEmail} type="text" placeholder="email"/>
                    <input ref={inputPassword1} type="text" placeholder="password one"/>
                    <input ref={inputPassword2} type="text" placeholder="password two"/>
                    <button onClick={toLogin}>Submit</button>

                </div>
            </div>

        </div>

    );
};

export default RegisterPage;