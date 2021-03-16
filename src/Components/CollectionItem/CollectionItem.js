import React from 'react'
import './CollectionItem.sass'

function CollectionItem({ id, name, price, imageUrl }) {
    return (
        <div className='collection__item'>
            <div
            className="item__image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="collection__footer">
                <span className="item__name">{name}</span>
                <span className="item__price">${price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
