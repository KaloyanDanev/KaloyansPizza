import React from 'react';
import logo from '../../images/brand/logo_transparent.png'
import ShoppingCart from "../ShoppingCart/ShoppingCart";

class Navbar extends React.Component {
    render() {
        return (
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white" id="main-navbar">
                    <div className="container">
                        <a href="/" className="navbar-brand">
                            <img src={logo} className="d-inline-block align-top" alt="logo"/>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a href="/#how-it-works" className="nav-item nav-link font-weight-bold active" >HOW IT WORKS</a>
                                <a href="/menu" className="nav-item nav-link font-weight-bold active">MENU</a>
                            </div>
                        </div>
                        <a href="/" className="btn btn-lg orderBtn" role="button">Start Order</a>
                    <ShoppingCart/>
                    </div>
                </nav>

        );
    }
}
export default Navbar;
