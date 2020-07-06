import React from 'react';



class Favorite extends React.Component {
    render() {


        return (

            <section className="container-fluid py-5" id="customer-favorites">
                <div className="container text-center">
                    <h2 className="text-white">Customer Favorites</h2>
                    <p className="text-light lead">Based on ratings</p>

                    <div className="menu-grid-container mt-5">
                        <div className="row favorite-grid"></div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Favorite;
