import React from 'react';
import logo from '../../images/brand/logo_transparent.png'
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white" id="main-navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="d-inline-block align-top" alt="logo"/>
                    </Link>
                    <div className=" navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/#how-it-works" className="nav-item nav-link font-weight-bold active" >HOW IT WORKS</Link>
                            <Link to="menu" className="nav-item nav-link font-weight-bold active">MENU</Link>
                        </div>
                    </div>
                    <Link to="menu" className="btn btn-lg orderBtn">Start Order</Link>
                    <Link to="cart"><i className="fa fa-shopping-cart fa-2x fa-cog"/></Link>
                </div>
            </nav>
        );
    }
}
export default Navbar;
