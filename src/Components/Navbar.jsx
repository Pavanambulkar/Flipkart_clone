import React from "react";
import "./Navbar.css";
import {FcSearch} from 'react-icons/fc'
import {AiOutlineDown, AiOutlineShoppingCart} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="logo"
          />
          <p className="ex">
            Explore <span>plus</span>
          </p>
        </div>
        <div className="search-box">
            <input type="text" placeholder="Search for Products, brands and more"/>
            <FcSearch className="search-icon"/>
        </div>
        <div className="login-btn">
            <button>Login</button>
        </div>
        <div className="menu-link">
         <ul>
            <li><a href="#">Become A Seller</a></li>
            <li><a href="#">More</a> <AiOutlineDown className="icon"/></li>
            <li><a href="#">Cart</a> <AiOutlineShoppingCart style={{color: "white"}}/> </li>

         </ul>
        </div>
        
      </nav>
      
    </>
  );
};

export default Navbar;
