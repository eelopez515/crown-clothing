import React from 'react';
//Component
import Button from '../Button/Button';

import './CollectionItem.sass';

function CollectionItem({ id, name, price, imageUrl }) {
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
      <Button inverted>ADD TO CART</Button>
    </div>
  );
}

export default CollectionItem;
