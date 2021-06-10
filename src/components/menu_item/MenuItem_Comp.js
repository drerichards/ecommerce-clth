import React from 'react';
import './scss/menu_item.scss'

const MenuItem_Comp = ({title, imgUrl, linkUrl, size}) => {
    return (
        <div className={`${size} menu-item`}>
            <div 
                className="background-image" 
                style={{
                    backgroundImage: `url(${imgUrl})`
                }} 
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
}

export default MenuItem_Comp
