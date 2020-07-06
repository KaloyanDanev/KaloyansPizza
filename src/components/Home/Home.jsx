import React from 'react';

import Favorite from "../../components/Favorite/Favorite"

import discover from '../../images/icons/discover.png';
import choose from '../../images/icons/choose.png';
import deliver from '../../images/icons/deliver.png';
import pay from '../../images/icons/pay.png';

class Home extends React.Component {
    render() {
        return (
            <>
                <section className="container-fluid py-5 marginHome" id="how-it-works">
                    <div className="container text-center">
                        <h2>Skip The Drive!</h2>
                        <p className="lead">Get Great Pizza In 4 Simple Steps</p>

                        <div className="row">
                            <div className="col-6 col-md-3 pt-5">
                                <img src={discover} alt=""/>
                                <h3 className="value-step">Discover</h3>
                                <p className="text-muted">Find a John's Pizza near you</p>
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
                                <p className="text-muted">Get your food ASAP</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Favorite/>
            </>
    );
    }
}

export default Home;