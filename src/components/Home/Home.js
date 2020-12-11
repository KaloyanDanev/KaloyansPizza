import React from 'react';

import Favorite from "../Favorite/Favorite"

import discover from '../../images/icons/discover.png';
import choose from '../../images/icons/choose.png';
import deliver from '../../images/icons/deliver.png';
import pay from '../../images/icons/pay.png';


class Home extends React.Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render(){
        return (
            <>
                <div className="jumbotron jumbotron-fluid shadow-none" id="home-landing">
                <div className="container jumbotron-center-main">
                    <div className="text-center text-white">
                        <h1 className="font-weight-bold text-shadow">Any Pizza, Free Delivery, Starts at £10</h1>
                        <p className="lead font-weight-bold text-shadow">No signups, no logins, Just Great Pizza!</p>
                    </div>
                </div>
                </div>

                <section className="container-fluid py-5 marginHome" id="how-it-works">
                    <div className="container text-center">
                        <h2>Skip The Drive!</h2>
                        <p className="lead">Get Great Pizza In 4 Simple Steps</p>

                        <div className="row">
                            <div className="col-6 col-md-3 pt-5">
                                <img src={discover} alt=""/>
                                <h3 className="value-step">Discover</h3>
                                <p className="text-muted">Find  Kaloyan's Pizza near you</p>
                            </div>

                            <div className="col-6 col-md-3 pt-5">
                                <img src={choose} alt=""/>
                                <h3 className="value-step">Choose</h3>
                                <p className="text-muted">A pizza, drink, and dessert</p>
                            </div>

                            <div className="col-6 col-md-3 pt-5">
                                <img src={pay} alt="pay"/>
                                <h3 className="value-step">Pay</h3>
                                <p className="text-muted">Pay online or with cash</p>
                            </div>

                            <div className="col-6 col-md-3 pt-5">
                                <img src={deliver} alt=""/>
                                <h3 className="value-step">Delivery</h3>
                                <p className="text-muted">Get your food</p>
                            </div>
                        </div>
                    </div>
                </section>
             <Favorite/>
            </>
    )
    }
}

export default Home;
