import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Toolbar = ({getPage}) => {
    const nav = useNavigate()

    function toHome() {
            nav("/home")

    }

    return (
        <div className="toolbar d-flex space-btw">
            <div onClick={toHome}>logo</div>
            <div className="d-flex">
                <div>
                    {getPage !== "login" && <Link className="style" to="/login"><h2>Login</h2></Link>}
                </div>
                <div>
                    {getPage !== "register" && <Link className="style" to="/register"><h2>Register</h2></Link> }
                </div>
            </div>



        </div>
    );
};

export default Toolbar;