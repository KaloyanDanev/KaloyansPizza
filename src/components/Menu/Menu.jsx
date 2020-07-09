import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <>
                <section className="container-fluid mt-5 py-5" id="menu">
                    <div className="container text-center">

                        <div className="menu-grid-container mt-5">
                            <h1 className="text-white my-5 font-weight-bold">Pizza</h1>
                            <div className="row pizza-grid"/>
                        </div>

                        <div className="menu-grid-container mt-5">
                            <h1 className="text-white my-5 font-weight-bold">Pizza Toppings</h1>
                            <div className="row toppings-grid"/>
                        </div>

                        <div className="menu-grid-container mt-5">
                            <h1 className="text-white my-5 font-weight-bold">Drinks</h1>
                            <div className="row drinks-grid"/>
                        </div>

                        <div className="menu-grid-container mt-5">
                            <h1 className="text-white my-5 font-weight-bold">Desserts</h1>
                            <div className="row dessert-grid"/>
                        </div>

                    </div>
                </section>
            </>
        );
    }
}

export default Menu;
