import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const {
    REACT_APP_STRIPE_KEY
} = process.env;

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email credits."
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={REACT_APP_STRIPE_KEY}
            >
                <button className="btn btn-flat" style={{color : "white"}}>Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);