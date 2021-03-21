import React from 'react';
//Components
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.sass';

function CollectionPreview({ title, items }) {
  return (
    <div className="collection__preview">
      <h1 className="preview__title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
