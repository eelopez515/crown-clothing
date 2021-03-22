import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//Components
import {
  selectCartItems,
  selectCartTotal,
} from '../../Redux/cart/cart-selectors';

import './ChecktoutPage.sass';

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkoutPage">
      <div className="checkout__header">
        <div className="checkout__header__block">
          <span>product</span>
        </div>
        <div className="checkout__header__block">
          <span>description</span>
        </div>
        <div className="checkout__header__block">
          <span>quantity</span>
        </div>
        <div className="checkout__header__block">
          <span>price</span>
        </div>
        <div className="checkout__header__block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
