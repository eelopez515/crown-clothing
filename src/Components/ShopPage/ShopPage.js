import React, { Component } from "react"
//Components
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import SHOP_DATA from './shopdata'

class ShopPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }

    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop__page'>
                {
                    collections.map(({id, ...collectionProps}) => (
                        <CollectionPreview
                        key={id}
                        {...collectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage