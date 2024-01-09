import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBox, faBullhorn, faChartBar, faChevronDown, faCreditCard, faHome, faHouse, faPalette, faPercent, faPlug, faShoppingCart, faTools, faTruck, faUsers } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const isLinkActive = (path) => location.pathname === path ? ' active-link' : '';

  return (
    <nav className="sidebar">
      <div className="logo-container">
        <img src="https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/305842526_480112457462860_1258181700195647656_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ATmvsDqagZkAX8LTYLi&_nc_ht=scontent.fdel1-2.fna&oh=00_AfC9F8RHacabHo9LbMRfg3m_IIxn4wgCnbZg4vPgrAvuDQ&oe=65A1C07B" alt="Logo" className="logo" />
        <div className="logo-text">
          <span className="logo-name">Nishyan</span>
          <span className="store">visit store</span>
        </div>
        <div className="arrow"><FontAwesomeIcon icon={faChevronDown} /></div>
      </div>
      <ul>
        <li className={`nav-item${isLinkActive('/')}`}><Link to="/" className="nav-link"><FontAwesomeIcon icon={faHome} className="nav-icon" /> Home</Link></li>
        <li className={`nav-item${isLinkActive('/orders')}`}><Link to="/orders" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} className="nav-icon" /> Orders</Link></li>
        <li className={`nav-item${isLinkActive('/products')}`}><Link to="/products" className="nav-link"><FontAwesomeIcon icon={faBox} className="nav-icon" /> Products</Link></li>
        <li className={`nav-item${isLinkActive('/delivery')}`}><Link to="/delivery" className="nav-link"><FontAwesomeIcon icon={faTruck} className="nav-icon" /> Delivery</Link></li>
        <li className={`nav-item${isLinkActive('/marketing')}`}><Link to="/marketing" className="nav-link"><FontAwesomeIcon icon={faBullhorn} className="nav-icon" /> Marketing</Link></li>
        <li className={`nav-item${isLinkActive('/analytics')}`}><Link to="/analytics" className="nav-link"><FontAwesomeIcon icon={faChartBar} className="nav-icon" /> Analytics</Link></li>
        <li className={`nav-item${isLinkActive('/payments')}`}><Link to="/payments" className="nav-link"><FontAwesomeIcon icon={faCreditCard} className="nav-icon" /> Payments</Link></li>
        <li className={`nav-item${isLinkActive('/tools')}`}><Link to="/" className="nav-link"><FontAwesomeIcon icon={faTools} className="nav-icon" /> Tools</Link></li>
        <li className={`nav-item${isLinkActive('/discounts')}`}><Link to="/discounts" className="nav-link"><FontAwesomeIcon icon={faPercent} className="nav-icon" /> Discounts</Link></li>
        <li className={`nav-item${isLinkActive('/audience')}`}><Link to="/audience" className="nav-link"><FontAwesomeIcon icon={faUsers} className="nav-icon" /> Audience</Link></li>
        <li className={`nav-item${isLinkActive('/appearance')}`}><Link to="/appearance" className="nav-link"><FontAwesomeIcon icon={faPalette} className="nav-icon" /> Appearance</Link></li>
        <li className={`nav-item${isLinkActive('/plugins')}`}><Link to="/plugins" className="nav-link"><FontAwesomeIcon icon={faPlug} className="nav-icon" /> Plugins</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
