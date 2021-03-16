import React from 'react'
import './Hompage.sass'

function Hompage() {
    return (
        <div className='homepage'>
            <div className="homepage__directory__menu">
                <div className="homepage__menu__item">
                    <div className="homepage__item__content">
                        <h1 className='menu__item__title'>HATS</h1>
                        <span className='menu__item__subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className="homepage__menu__item">
                    <div className="homepage__item__content">
                        <h1 className='menu__item__title'>JACKETS</h1>
                        <span className='menu__item__subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className="homepage__menu__item">
                    <div className="homepage__item__content">
                        <h1 className='menu__item__title'>SNEAKERS</h1>
                        <span className='menu__item__subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className="homepage__menu__item">
                    <div className="homepage__item__content">
                        <h1 className='menu__item__title'>WOMEN</h1>
                        <span className='menu__item__subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className="homepage__menu__item">
                    <div className="homepage__item__content">
                        <h1 className='menu__item__title'>MEN</h1>
                        <span className='menu__item__subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hompage
