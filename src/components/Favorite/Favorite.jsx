import React from 'react';
import victor from '../../images/customers/victor.jpg'
import christine from '../../images/customers/christine.jpg'
import chloe from '../../images/customers/chloe.jpg'
import rikki from '../../images/customers/rikki.jpg'

import gardenPizza from '../../images/menu/pizza/garden.jpg'
import peperoniPizza from '../../images/menu/pizza/pepperoni.jpg'
import cheseesePizza from '../../images/menu/pizza/cheese.jpg'

import chocolate from '../../images/menu/desserts/chocolate-chip-brownie.jpg'


class Favorite extends React.Component {
    render() {
        return (
            <div>
                <section className="container-fluid py-5" id="customer-favorites">
                    <div className="container text-center">
                        <h2 className="text-white">Customer Favorites</h2>
                        <p className="text-light lead">Based on ratings</p>

                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 px-2">
                                <div className="card card-testimonital my-2 shadow-none">
                                    <img className="card-img-top" src={gardenPizza}
                                         alt="Garden Pizza"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-left font-weight-bold">Garden Pizza</h5>
                                        <p className="card-text text-left"><i
                                            className="material-icons">format_quote</i>The service is outstanding and
                                            that everything is fresh and great especially the pizza i would want to go
                                            back.</p>
                                        <span className="text-success">Reviewed by</span>
                                        <span className="chip">
                <img alt="Chip Image" className="chip-img" src={christine}/>
                Christine
              </span>
                                    </div>
                                    <div class="card-footer">
                                        <a class="btn btn-block shadow-sm btn-lg btn-CTA" href="order.html?item=garden"
                                           role="button">Try It!</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 px-2">
                                <div className="card card-testimonital my-2 shadow-none">
                                    <img className="card-img-top" src={peperoniPizza}
                                         alt="Pepperoni Pizza"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-left font-weight-bold">Pepperoni Pizza</h5>
                                        <p className="card-text text-left"><i
                                            className="material-icons">format_quote</i>John's Pizza is sooooooooo
                                            awesome!!! CJ was really friendly and delivered the most delicious pizza
                                            ever.</p>

                                        <span className="text-success">Reviewed by</span>
                                        <span className="chip">
                <img alt="Chip Image" className="chip-img" src={chloe}/>
                Chloe
              </span>

                                    </div>
                                    <div class="card-footer">
                                        <a class="btn btn-block shadow-sm btn-lg btn-CTA"
                                           href="order.html?item=pepperoni" role="button">Try It!</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 px-2">
                                <div className="card card-testimonital my-2 shadow-none">
                                    <img className="card-img-top" src={cheseesePizza}
                                         alt="Cheese Pizza"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-left font-weight-bold">Cheese Pizza</h5>
                                        <p className="card-text text-left"><i
                                            className="material-icons">format_quote</i>Visiting from out of town and a
                                            friend suggested John's Pizza. She was spot on...so good.</p>

                                        <span className="text-success">Reviewed by</span>
                                        <span className="chip">
                <img alt="Customer Image" className="chip-img" src={victor}/>
                Victor
              </span>

                                    </div>
                                    <div class="card-footer">
                                        <a class="btn btn-block shadow-sm btn-lg btn-CTA" href="order.html?item=cheese"
                                           role="button">Try It!</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 offset-lg-4 col-xl-3 offset-xl-0 mt-3 px-2">
                                <div className="card card-testimonital my-2 shadow-none">
                                    <img className="card-img-top" src={chocolate}
                                         alt="Chocolate Chip Brownie"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-left font-weight-bold">Chocolate Chip
                                            Brownie</h5>
                                        <p className="card-text text-left"><i
                                            className="material-icons">format_quote</i>I think I'm in love! It's just so
                                            good! Melts in your mouth and leaves you wanting more.</p>

                                        <span className="text-success">Reviewed by</span>
                                        <span className="chip">
                                            <img alt="Customer Image" className="chip-img" src={rikki}/>Rikki</span>

                                    </div>
                                    <div class="card-footer">
                                        <a class="btn btn-block shadow-sm btn-lg btn-CTA"
                                           href="order.html?item=doublechocolatechipbrownie" role="button">Try It!</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Favorite;