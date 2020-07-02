import React from 'react';

import logo from '../../images/brand/logo_transparent.png'

class Navbar extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid shadow-none" id="home-landing">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white" id="main-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="javascript:void(0)">
                            <img src={logo} className="d-inline-block align-top" alt=""/>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link font-weight-bold active" href="#how-it-works">HOW IT
                                    WORKS</a>
                                <a className="nav-item nav-link font-weight-bold" href="menu.html">MENU</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container jumbotron-center-main">
                    <div className="text-center text-white">
                        <h1 className="display-2 font-weight-bold text-shadow">Any Pizza, Free Delivery, Starts at $10</h1>
                        <p className="lead font-weight-bold text-shadow">No signups, no logins, Just Great Pizza!</p>
                    </div>
                </div>

            </div>

        );
    }
}
export default Navbar;
