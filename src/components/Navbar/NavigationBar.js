import React from 'react';
import logo from '../../images/brand/logo_transparent.png'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

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
                        <div className="navbar-collapse " id="navbarNavAltMarkup">
                                <Link to="/#how-it-works" className="navigation nav-item nav-link font-weight-bold active">HOW IT WORKS</Link>
                                <Link to="menu" className="navigation nav-item nav-link font-weight-bold active">MENU</Link>
                        </div>
                    </Nav>
                        <Link to="menu" className="btn btn-lg orderBtn">Start Order</Link>
                    <div className="nav-cart">
                        <span>{this.props.items.length}</span>
                        <Link to="cart">
                            <i className="fa fa-shopping-cart fa-2x fa-cog header__basketCount header__optionLineTwo"/>
                        </Link>
                    </div>

                </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}
export default connect(mapStateToProps)(NavigationBar)
