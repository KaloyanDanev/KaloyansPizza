import React from 'react';

import data from "../../../data/menu.json"

class Desserts extends React.Component {
    render() {
        return (
            <div className="row desserts-grid">{data.desserts.map((data,key) => {
                return (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-2" key={key}>
                        <div className="card menu-card my-2 shadow-none">
                            <img className="card-img-top" src={require(`../../../images/menu/desserts/`+ data.photo)}
                                 alt={data.name}/>
                                <div className="card-body">
                                    <h5 className="card-title text-left font-weight-bold">{data.name}</h5>
                                    <p className="card-text text-left">{data.description}</p>
                                    <p className="text-success text-left">
                                        <em>{data.calorie_per_serving} calories</em>
                                    </p>
                                    <p className="grid-price">£ {data.price}</p>
                                </div>
                            <div className="card-footer">
                                <a href={"/menu"} className="btn btn-block shadow-sm btn-lg btn-CTA" role="button">Add <i className="fa fa-shopping-cart"/></a>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        );
    }
}

export default Desserts;
