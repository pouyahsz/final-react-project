import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '../../icon';
import logo from '../../images/logo.png';
import './header-style.scss'
export const Header = () => {
    const count = useSelector((state) => state.counter);
    return (
        <header>
            <div className="container top-section">
                <div className="logo">
                    <a href="https://www.bestbuy.com/"><img src={logo} alt="logo" /></a>
                </div>
                <div className="menu">
                    <Icon className="fa-solid fa-bars" textContext="Menu" />
                </div>
                <div className="search-box">
                    <input type="text" placeholder='Search-Best-Box' />
                    <Icon className="fa-solid fa-magnifying-glass blue-icon" textContext="" />
                </div>
                <div className="right-boxes">
                    <Icon className="fa-solid fa-location-dot" textContext="Bangor" />
                    <Icon className="fa-solid fa-cart-shopping" textContext="Cart" badgeContent={count}/>
                </div>
            </div>
            <div className="bottom-section">
                <div className="container">
                    
                <div className="left-nav">
                    <ul className='items'>
                        <li>Top Deals</li>
                        <li>Deal of the Day</li>
                        <li>Totaltech Membership</li>
                        <li>Credit Cards</li>
                        <li>Gift Cards</li>
                        <li>More <i className='fa-solid fa-angle-down'></i></li>
                    </ul>
                </div>
                <div className="right-nav">
                    <ul>
                        <li><i className='fa-solid fa-circle-user'></i> Account</li>
                        <li>Recently Viewed</li>
                        <li>Order Status</li>
                        <li>Saved Items</li>
                        
                    </ul>
                </div>
                </div>
            </div>
        </header>
    )
}
