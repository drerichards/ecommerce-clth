import React from 'react'

const InventoryPreview = ({title, items}) => {
    return (
        <div className='inventory-preview'>
            <h1 className='title'>{title}</h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default InventoryPreview
