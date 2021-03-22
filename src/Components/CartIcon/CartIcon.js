import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingCartIcon } from '../../Assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';
//Components
import { toggleCartHidden } from '../../Redux/cart/cart-actions';
import { selectCartItemsCount } from '../../Redux/cart/cart-selectors';

import './CartIcon.sass';

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cartIcon" onClick={toggleCartHidden}>
      <ShoppingCartIcon className="cart__icon" />
      <span className="cart__count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
