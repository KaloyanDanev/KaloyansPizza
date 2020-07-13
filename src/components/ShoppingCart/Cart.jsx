import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'
import Recipe from './Recipe'
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to subtract from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
        let addedItems = this.props.pizzas.length ?
            (
             <div className="row desserts-grid">{this.props.pizzas.map(item=>{
                    return(
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-2" >
                        <div className="card menu-card my-2 shadow-none" key={item.name}>
                                <img className="card-img-top" src={item.photo} alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title text-left font-weight-bold">{item.name}</h5>
                                </div>
                                <div className="card-content">
                                    <p>
                                        <b>Price:£ {item.price}</b>
                                    </p>
                                </div>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                            <div className="add-remove">
                                <Link to="cart"><i className="fa fa-plus fa-2x fa-cog" aria-hidden="true" onClick={()=>{this.handleAddQuantity(item.id)}}/></Link>
                                <Link to="cart"><i className="fa fa-minus fa-2x fa-cog" onClick={()=>{this.handleSubtractQuantity(item.id)}}/></Link>
                            </div>
                            <button className="btn-CTA btn active" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                        </div>
                        </div>
                    )
             })}
             </div>
            ):

            (
                <h3 className="text-white my-5 font-weight-bold">Empty Cart</h3>
            )

        return(
            <section className="container-fluid mt-5 py-5" id="menu">
                <div className="row favorite-grid">
                    <div className="container text-center">
                    <h1 className="text-white my-5 font-weight-bold">Your Order</h1>
                        <Recipe/>
                        {addedItems}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        pizzas: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)