import React from "react";
import "./Navbar.css";
import { FcSearch } from "react-icons/fc";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import {FaPlus, FaFirstOrder} from "react-icons/fa";
import {TbJewishStar} from "react-icons/tb";
import {HiGift} from "react-icons/hi";
import {BsEmojiHeartEyes} from "react-icons/bs";
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
          <input
            type="text"
            placeholder="Search for Products, brands and more"
          />
          <FcSearch className="search-icon" />
        </div>
        <div className="right-menu">
          <button className="menu-btn">Login</button>
          <div className="dropdown-menu">
            <li> <CgProfile/> <a href="">My Profile</a></li>
            <li> <FaPlus/> <a href="">Flipkart PlusZone</a></li>
            <li> <FaFirstOrder/> <a href="">Orders</a></li>
            <li> <TbJewishStar/> <a href="">Reward</a></li>
            <li> <BsEmojiHeartEyes/> <a href="">Wishlist</a></li>
            <li> <HiGift/> <a href="">GiftCard</a></li>
            
            
            

            
            
          </div>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Become A Seller</a>
            </li>
            <li>
              <a href="#">More</a> <AiOutlineDown className="icon" />
            </li>
            <li>
              <a href="#">Cart</a>{" "}
              <AiOutlineShoppingCart style={{ color: "white" }} />{" "}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
