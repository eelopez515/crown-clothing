import React from 'react'
import './MenuItem.sass'

function MenuItem({ title, imageUrl, size }) {
    return (
            <div className={`${size} menu__item`}>
            <div
            className='background__image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
                <div className='item__content'>
                    <h1 className='item__title'>{title.toUpperCase()}</h1>
                    <span className='item__subtitle'>SHOP NOW</span>
                </div>
            </div>
    )
}

export default MenuItem
