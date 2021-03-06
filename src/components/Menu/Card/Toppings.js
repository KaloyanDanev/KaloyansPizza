import React from 'react';

import {addToCart} from "../../actions/cartActions";
import {connect} from "react-redux";

class Toppings extends React.Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.filter(x=> x.category ==="topping").map(item=> {
            return(
                <div className="productWrapper">
                    <div className="productCard">
                        <img className="productImg" src={item.photo} alt={item.name}/>
                        <div className="productInfo">
                            <h2 className="productTitle">{item.name}</h2>
                            <p className="productDescription">{item.description}</p>
                            <em>{item.additional_calories} calories</em>
                            <p className="productPrice">£ {item.price}</p>
                            <button className="productButton" onClick={() => {
                                this.handleClick(item.id)
                            }}>Add <i className="fa fa-shopping-cart"/></button>
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
