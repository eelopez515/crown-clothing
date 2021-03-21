import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingCartIcon } from '../../Assets/shopping-bag.svg';
//Components
import { toggleCartHidden } from '../../Redux/cart/cart-actions';

import './CartIcon.sass';

function CartIcon({ toggleCartHidden }) {
  return (
    <div className="cartIcon" onClick={toggleCartHidden}>
      <ShoppingCartIcon className="cart__icon" />
      <span className="cart__count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
