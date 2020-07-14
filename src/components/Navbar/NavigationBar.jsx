import React from 'react';
import logo from '../../images/brand/logo_transparent.png'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="navbar fixed-top navbar-expand-lg navbar-light bg-white" id="main-navbar">
                <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} className="d-inline-block align-top" alt="logo"/>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <div className=" navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/#how-it-works" className="nav-item nav-link font-weight-bold active" >HOW IT WORKS</Link>
                                <Link to="menu" className="nav-item nav-link font-weight-bold active">MENU</Link>
                            </div>
                        </div>
                    </Nav>
                        <Link to="menu" className="btn btn-lg orderBtn">Start Order</Link>
                        <Link to="cart"><i className="fa fa-shopping-cart fa-2x fa-cog"/></Link>
                </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}
export default NavigationBar;
