import React from 'react';

import {addToCart} from "../../actions/cartActions";
import {connect} from "react-redux";
import {toast, ToastContainer} from 'react-toastify';

class Drinks extends React.Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.filter(x=> x.category ==="drink").map(item=> {
            const notify = () => toast.success(`${item.name} Added`);
            return(
                <div className="productWrapper">
                    <div className="productCard">
                        <img className="productImg" src={item.photo} alt={item.name}/>
                        <div className="productInfo">
                            <h2 className="productTitle">{item.name}</h2>
                            <p className="productDescription">{item.description}</p>
                            <em>{item.calorie} calories</em>
                            <p className="productPrice">£ {item.price}</p>
                            <button className="productButton" onClick={() => {
                                this.handleClick(item.id);
                                notify()
                            }}>Add <i className="fa fa-shopping-cart"/></button>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
                )
        })
        return (
            <div className="row drinks-grid">
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

export default connect(mapStateToProps,mapDispatchToProps)(Drinks);



