import React from 'react';

import './CartItem.sass';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <div className="cartItem">
      <img src={imageUrl} alt={name} />
      <div className="cart__item__details">
        <span className="item__name">{name}</span>
        <span className="item__price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
