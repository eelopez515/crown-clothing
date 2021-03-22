import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
//Component
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/cart/cart-selectors';

import './CartDropdown.sass';

function CartDropdown({ cartItems, history }) {
  return (
    <div className="cart__dropdown">
      <div className="cart__items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="cart__empty">Your Cart Is Empty</span>
        )}
      </div>
      <Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
