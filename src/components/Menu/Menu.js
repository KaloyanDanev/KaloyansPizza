import React from 'react';

import Pizzas from "./Card/Pizzas";
import Toppings from "./Card/Toppings";
import Drinks from "./Card/Drinks";
import Desserts from "./Card/Desserts";

class Menu extends React.Component {
    render() {
        return (
            <>
                <section className="container-fluid mt-5 py-5" id="menu">
                    <div className="container text-center">
                        <div className="productsContainer">
                            <h1 className="productsHeading">Pizza</h1>
                            <Pizzas/>

                            <h1 className="productsHeading">Toppings</h1>
                            <Toppings/>

                            <h1 className="productsHeading">Drinks</h1>
                            <Drinks/>

                            <h1 className="productsHeading">Desserts</h1>
                            <Desserts/>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default Menu;
