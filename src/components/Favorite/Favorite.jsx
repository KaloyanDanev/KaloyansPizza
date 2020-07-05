import React from 'react';
import victor from '../../images/customers/victor.jpg'
import christine from '../../images/customers/christine.jpg'
import chloe from '../../images/customers/chloe.jpg'
import rikki from '../../images/customers/rikki.jpg'

import gardenPizza from '../../images/menu/pizza/garden.jpg'
import peperoniPizza from '../../images/menu/pizza/pepperoni.jpg'
import cheseesePizza from '../../images/menu/pizza/cheese.jpg'
import chocolateChipBrownie from '../../images/menu/desserts/chocolate-chip-brownie.jpg'

class Favorite extends React.Component {
    render() {

        const favorite =    [
            {
                "product":"Garden Pizza",
                "productImg": gardenPizza,
                "name": "Christine",
                "comment": "The service is outstanding and that everything is fresh and great especially the pizza i would want to go back.",
                "img": christine
            },
            {
                "product":"Pepperoni Pizza",
                "productImg": peperoniPizza,
                "name": "Chloe",
                "comment": "Kaloyan's Pizza is sooooooooo awesome!!! CJ was really friendly and delivered the most delicious pizza ever.",
                "img": chloe
            },
            {
                "product":"Cheese Pizza",
                "productImg": cheseesePizza,
                "name": "Victor",
                "comment": "Visiting from out of town and a friend suggested Kaloyan's Pizza. She was spot on...so good.",
                "img": victor
            },
            {
                "product":"Chocolate Chip Brownie",
                "productImg": chocolateChipBrownie,
                "name": "Rikki",
                "comment": "I think I'm in love! It's just so good! Melts in your mouth and leaves you wanting more.",
                "img": rikki
            }
        ]

        return (
            <div>
                <section className="container-fluid py-5" id="customer-favorites">
                    <div className="container text-center">
                        <h2 className="text-white">Customer Favorites</h2>
                        <p className="text-light lead">Based on ratings</p>

                        <div className="row">
                            {favorite.map(item => (
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 px-2">
                                    <div className="card card-testimonital my-2 shadow-none">
                                        <img className="card-img-top" src={item.productImg}
                                             alt="Garden Pizza"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-left font-weight-bold">{item.product}</h5>
                                            <p className="card-text text-left"><i
                                                className="material-icons">format_quote</i>{item.comment}</p>
                                            <span className="text-success">Reviewed by</span>
                                            <span className="chip">
                                <img alt="Chip Image" className="chip-img" src={item.img}/>
                                                {item.name}
                                </span>
                                        </div>
                                        <div className="card-footer">
                                            <a className="btn btn-block shadow-sm btn-lg btn-CTA" href="order.html?item=garden"
                                               role="button">Try It!</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Favorite;
