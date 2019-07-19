import React from 'react';
import { Link } from "react-router-dom"

const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <div className="container">
            <td><Link to="/login">Login</Link></td>
            <td><Link to={"/cars"}>Cars</Link></td>
        </div>

    </div>
);

export default HomePage;