import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className="d-flex space-e column">
                <div className="link-style">
                    <Link to="/home">Home</Link>
                </div>
                <div className="link-style">
                    <Link to="/about">About</Link>
                </div>
                <div className="link-style">
                    <Link to="/information">Information</Link>
                </div>
                <div className="link-style">
                    <Link to="/contacts">Contacts</Link>
                </div>
                <div className="link-style">
                    <Link to="/maps">Maps</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;