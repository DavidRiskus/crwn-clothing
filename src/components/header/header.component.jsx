import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = () => {
    return (
        //Logo as button to Homepage 
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>


            {/* Options Navigation */}
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
            </div>

        </div>
    )
}

export default Header;