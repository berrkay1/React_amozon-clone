import React from 'react'
import './Header.css';
// icons
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <StorefrontIcon className='logo' fontSize='large' />
                <h2 className="logo-title">Amazon</h2>
            </div>

            <div className="header-search">
                <input type="text" className='search' />
                <SearchIcon className='search-icon' />
            </div>

            <div className="header-nav">
                <div className="nav-item">
                    <span className="nav-itemLineOne">Hello Guest</span>
                    <span className="nav-itemLineTwo">Sign In</span>
                </div>
                <div className="nav-item">
                    <span className="nav-itemLineOne">Your</span>
                    <span className="nav-itemLineTwo">Shop</span>
                </div>
                <div className="nav-item">
                    <ShoppingBasketIcon className='nav-basket' />
                    <span className="nav-itemLineTwo nav-count">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header