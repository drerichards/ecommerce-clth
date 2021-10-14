import React, { Component } from 'react'
import CollectionPreview from "components/collection_preview/CollectionPreview_Comp"
import INVENTORY_DATA from 'data/inventory_data'

class Shop_Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collection: INVENTORY_DATA
        }
    }
    render() {
        return (
            <div className='shop-page'>
                <h1>Shop Page</h1>
                {
                    this.state.collection.map(({id, ...collectionProps}) => (
                        <CollectionPreview key={id} {...collectionProps} />
                    ))

                }
            </div>
        )
    }
}

export default Shop_Page
