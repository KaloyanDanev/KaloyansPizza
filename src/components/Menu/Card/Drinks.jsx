import React from 'react';

import {addToCart} from "../../actions/cartActions";
import {connect} from "react-redux";
import { toast } from 'react-toastify';

class Drinks extends React.Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.filter(x=> x.category ==="drink").map(item=> {
            const notify = () => toast.success(`${item.name} Added`);
            return(
                <div className="col-lg-3 col-sm-12 col-md-6 px-2" key={item.id}>
                        <div className="card menu-card my-2 shadow-none">
                            <img className="card-img-top" src={item.photo}
                                 alt={item.name}/>
                            <div className="card-body">
                                <h5 className="card-title text-left font-weight-bold">{item.name}</h5>
                                <p className="text-success text-left">
                                    <em>{item.calorie} calories</em></p>
                                <p className="grid-price">£ {item.price}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-block orderBtn shadow-sm btn-lg btn-CTA" onClick={()=>{this.handleClick(item.id);notify()}}>Add <i className="fa fa-shopping-cart"/></button>
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



