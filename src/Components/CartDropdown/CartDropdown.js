import React from 'react';
import { connect } from 'react-redux';
//Component
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/cart/cart-selectors';

import './CartDropdown.sass';

function CartDropdown({ cartItems }) {
  return (
    <div className="cart__dropdown">
      <div className="cart__items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
