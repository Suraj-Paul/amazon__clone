import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to = "/">
            <img  className ="header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className = "header__search">
                <input classNmae = "header__searchInput" type = "text"/>
                <SearchIcon className = "header__searchIcon"/> 
            </div>
            <div className="header__nav">
                <Link to = {!user && '/login'}>
                <div onClick ={handleAuthentication} className = "header__component">
                    <span className = "header__component1__user">
                        Hello {!user?'Guest':user.email}
                    </span>
                    <span className = "header__component2" >
                        {user?'Sign Out':'Sign In'}
                    </span>
                </div>
                </Link>
                
                <div className = "header__component">
                    <span className = "header__component1">
                        Returns
                    </span>
                    <span className = "header__component2">
                        & Orders
                    </span>
                </div>
                <div className = "header__component">
                    <span className = "header__component1">
                        Your 
                    </span>
                    <span className = "header__component2">
                        Prime
                    </span>
                </div>
                <Link to = "checkout">
                    <div className = "header__componentBasket">
                        <ShoppingBasketIcon/>
                            <span className="header__component2 header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>    
    )
}

export default Header;
