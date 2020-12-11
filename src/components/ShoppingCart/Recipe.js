import React, { Component } from 'react'
import { connect } from 'react-redux'
class Recipe extends Component{

    render(){

        return(
            <div className="container row">
                <div className="collection card col-lg-3 col-sm-12 col-md-6 px-2 card-body test">
                    <b>Total: £{this.props.total}</b>
                    <button className="btn btn-lg orderBtn">Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Recipe)
