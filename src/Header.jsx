import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
// icons
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';

import {useStateValue} from './StateContext';

function Header() {

    const [{basket},dispatch] = useStateValue();

    return (
        <div className="header">

            <Link to='/' style={{textDecoration:'none'}}>
            <div className="header-logo">
                <StorefrontIcon className='logo' fontSize='large' />
                <h2 className="logo-title">Amazon</h2>
            </div>
            </Link>

            

            <div className="header-search">
                <input type="text" className='search' />
                <SearchIcon className='search-icon' />
            </div>

            <div className="header-nav">
            <Link to='/Login' style={{ textDecoration: "none" }}>
            <div className="nav-item">
                    <span className="nav-itemLineOne">Hello Guest</span>
                    <span className="nav-itemLineTwo">Sign In</span>
                </div>
            </Link>
                

                <div className="nav-item">
                    <span className="nav-itemLineOne">Your</span>
                    <span className="nav-itemLineTwo">Shop</span>
                </div>
                <Link to='checkout' className='link nav-basket' style={{textDecoration:'none'}}  >
                
                    <ShoppingBasketIcon  />
                    <span className="nav-itemLineTwo nav-count">{basket.length}</span>
                
                </Link>
                
            </div>
        </div>
    )
}

export default Header