import React from 'react';
import { useSelector,dispatch, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '../../icon';
import logo from '../../images/logo.png';
import { searchHandler } from '../../redux/searchSlice';
import './header-style.scss'
export const Header = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.search.search);
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
                    <input type="text" placeholder='Search-Best-Box' value={value} onChange={(e)=>{
                        dispatch(searchHandler(e.target.value))
                    }}/>
                    <Icon className="fa-solid fa-magnifying-glass blue-icon" textContext="" />
                </div>
                <div className="right-boxes">
                    <Icon className="fa-solid fa-location-dot" textContext="Bangor" />
                    <Link to='/basket'><Icon className="fa-solid fa-cart-shopping" textContext="Cart" badgeContent={count}/></Link>
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
