import React from 'react'
import { withRouter } from 'react-router-dom'
import './scss/menu_item.scss'

const MenuItem_Comp = ({ title, imageUrl, linkUrl, size, history, match }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem_Comp)
