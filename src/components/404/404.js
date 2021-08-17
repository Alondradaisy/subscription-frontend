import React from 'react';
import { Link } from "react-router-dom";

function 404() {
    return (
        <div>
            404 - Sorry, the page you're looking for does not exist. 
            <Link to="/">Home</Link>
        </div>
    );
}

export default 404;
