import React from 'react';

import favoriteData from "../../data/favorite.json"

class FavoriteCard extends React.Component {
    render() {
        return (
            <div className="row favorite-grid">{favoriteData.map((data,key) => {
                return (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-2" key={key}>
                    <div className="card menu-card my-2 shadow-none">
                        <img className="card-img-top" src={require(`../../images/menu/pizza/`+ data.photo)} alt={data.product} />
                        <div className="card-body">
                            <h5 className="card-title text-left font-weight-bold">{data.product}</h5>
                            <p className="card-text text-left">
                                <i className="material-icons">format_quote</i>
                                {data.comment}
                            </p>
                            <p className="text-success text-left"><em>Reviewed by </em>
                                <span className="chip">
                                                <img className="chip-img" src={require(`../../images/customers/`+ data.img)}  alt="Customer" />
                                    {data.name}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        );
    }
}

export default FavoriteCard;
