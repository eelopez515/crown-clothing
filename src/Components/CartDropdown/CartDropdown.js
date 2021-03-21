import React from 'react';
//Component
import Button from '../Button/Button';

import './CartDropdown.sass';

function CartDropdown() {
  return (
    <div className="cart__dropdown">
      <div className="cart__items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
