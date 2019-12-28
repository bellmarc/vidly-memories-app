import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import { withUsers } from '../context/UserProvider.js';


const Navbar= (props) => {
    // console.log(props.history.location)
    return (
        <div className="navbar">
            <div className="navbar-logo"><img src={ require("../assets/vidly-logo.svg")} className="logo" alt="Vidly camera logo"/><Link to="/">Vidly</Link>
            </div>
            <div className="current-tab navbar-links">
                <Link
                    to="/about"
                    className={props.pathname === "/about" ? "nav-highlight" : ""}>
                    About
                </Link>
                <Link
                    to="/destination"
                    className={props.pathname === "/destination" && "nav-highlight"} >
                    Destination
                </Link>
                <Link
                    to="/booking"
                    className={props.pathname === "/booking" &&"nav-highlight"}>
                    Book
                </Link>
                <Link
                    to="/login"
                    className={props.pathname === "/login" && "nav-highlight"}>
                    Login
                </Link>
            </div>
        </div>
    )
}



export default withUsers(Navbar)