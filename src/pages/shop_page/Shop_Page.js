import React, { Component } from 'react'
import InventoryPreview from "components/inventory_preview/InventoryPreview_Comp"
import inventory_data from 'data/inventory_data'

class Shop_Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inventory: inventory_data
        }
    }
    render() {
        return (
            <div className='shop=page'>
                <h1>Shop Page</h1>
                {
                    this.state.inventory.map(({id, ...inventoryProps}) => (
                        <InventoryPreview key={id} {...inventoryProps} />
                    ))

                }
            </div>
        )
    }
}

export default Shop_Page
