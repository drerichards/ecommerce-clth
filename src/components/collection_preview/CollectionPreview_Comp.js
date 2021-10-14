import React from 'react'
import CollectionItem from '../collection_item/CollectionItem_Comp'
import './scss/collection-preview.scss'

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview
