import React from 'react';

import {addToCart} from "../../actions/cartActions";
import {connect} from "react-redux";

class Toppings extends React.Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item=>{
            if (item.category === "topping")
                return(
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-2" key={item.id}>
                <div className="card menu-card my-2 shadow-none">
                    <img className="card-img-top" src={item.photo}
                         alt={item.name}/>
                    <div className="card-body">
                        <h5 className="card-title text-left font-weight-bold">{item.name}</h5>
                        <p className="text-success text-left">
                            <em>{item.additional_calories} calories</em></p>
                        <p className="grid-price">£ {item.price}</p>
                    </div>
                    <div className="card-footer">
                        <button to="/" className="btn orderBtn btn-block shadow-sm btn-lg btn-CTA" onClick={()=>{this.handleClick(item.id)}}>Add <i className="fa fa-shopping-cart"/></button>
                    </div>
                </div>
            </div>
            )
        })
        return (
            <div className="row toppings-grid">
                {itemList}
            </div>
        )

    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Toppings);
