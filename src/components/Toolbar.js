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
                    {getPage !== "createPost" && <Link className="style" to="/createPost"><h2>Create posts</h2></Link>}
                </div>
                <div>
                    {getPage !== "posts" && <Link className="style" to="/posts"><h2>Show posts</h2></Link> }
                </div>
            </div>
        </div>
    );
};

export default Toolbar;