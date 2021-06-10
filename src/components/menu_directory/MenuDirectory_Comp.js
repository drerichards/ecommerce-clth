import React from 'react';
import './scss/menu_directory.scss'

import MenuItem from 'components/menu_item/MenuItem_Comp'

const MenuDirectory = ({sections}) => {
    return (
        <div className="menu-directory">
            {sections.map(({id, title, imageUrl, linkUrl, size}) => {
                return (
                    <MenuItem 
                        key={id} 
                        title={title}
                        imgUrl={imageUrl}
                        linkUrl={linkUrl}
                        size={size}
                     />
                )
            })}
        </div>
    );
}

export default MenuDirectory;
