import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {

    return (


        // if has size, will render 2 classNames, if doesnt will just have menu-item

        // TO MAKE IT WORK, actually need to pass in with
        <div className={`${size}  menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>

            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="background-image" />

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);