import React from 'react';
import { connect } from 'react-redux';
//Component
import Button from '../Button/Button';
import { addItem } from '../../Redux/cart/cart-actions';

import './CollectionItem.sass';

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection__item">
      <div
        className="item__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection__footer">
        <span className="item__name">{name}</span>
        <span className="item__price">${price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        ADD TO CART
      </Button>
    </div>
  );
}

const mapDispatchToProp = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProp)(CollectionItem);
