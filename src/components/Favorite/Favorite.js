import React from 'react';

import FavoriteCard from "./FavoriteCard";

class Favorite extends React.Component {
    render() {
        return (
            <section className="container-fluid py-5" id="customer-favorites">
                <div className="container text-center">
                    <h2 className="text-white">Customer Favorites</h2>
                    <div className="favorite-grid-container mt-5">
                      <FavoriteCard/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Favorite;
