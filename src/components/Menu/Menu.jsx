import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <>
                <section className="container-fluid mt-5 py-5" id="menu">
                    <div className="container text-center">
                        <h1 className="text-white my-5 font-weight-bold">Menu</h1>

                        <div className="menu-grid-container mt-5">
                            <p className="subtitle-title lead text-white font-weight-bold">Pizza</p>
                            <div className="row pizza-grid"></div>
                        </div>

                        <div className="menu-grid-container mt-5">
                            <p className="subtitle-title lead text-white font-weight-bold">Pizza Toppings</p>
                            <div className="row toppings-grid"></div>
                        </div>

                        <div className="menu-grid-container mt-5">
                            <p className="subtitle-title lead text-white font-weight-bold">Drinks</p>
                            <div className="row drinks-grid"></div>
                        </div>

                        <div className="menu-grid-container mt-5">
                            <p className="subtitle-title lead text-white font-weight-bold">Desserts</p>
                            <div className="row dessert-grid"></div>
                        </div>

                    </div>
                </section>
            </>
        );
    }
}

export default Menu;
