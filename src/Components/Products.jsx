import React from 'react'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import './Products.css'
const Products = () => {
  return (
    <div className='products'>
     <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="grocery" />
        <p>Grocery</p>
     </div>
     <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="mobile" />
        <p>Mobile</p>
     </div>
     <div className='right-menu1'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="fashion" />
        <p>Fashion <IoIosArrowDropdownCircle className='down'/> </p>
        <div className="dropdown-menu">
            <a href="#">Men's Bottom Wear</a>
            <a href="#">Women Ethnic</a>
            <a href="#">Women Western</a>
            <a href="#">Men Footwear</a>
            <a href="#">Women Footwear</a>
            <a href="#">Watches and Accessories</a>
            <a href="#">Bag's, Suitcase and Luggage</a>
            <a href="#">Kids</a>
            <a href="#">Essential </a>
            <a href="#">Winter</a>

        </div>
     </div>
     <div className='right-menu1'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="electronics" />
        <p>Electronics <IoIosArrowDropdownCircle className='down'/></p>
         <div className="dropdown-menu">
            <a href="#">Men's Bottom Wear</a>
            <a href="#">Women Ethnic</a>
            <a href="#">Women Western</a>
            <a href="#">Men Footwear</a>
            <a href="#">Women Footwear</a>
            <a href="#">Watches and Accessories</a>
            <a href="#">Bag's, Suitcase and Luggage</a>
            <a href="#">Kids</a>
            <a href="#">Essential </a>
            <a href="#">Winter</a>

        </div>
     </div>
     <div className='right-menu1'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="home" />
        <p>Home <IoIosArrowDropdownCircle className='down'/></p>
         <div className="dropdown-menu">
            <a href="#">Men's Bottom Wear</a>
            <a href="#">Women Ethnic</a>
            <a href="#">Women Western</a>
            <a href="#">Men Footwear</a>
            <a href="#">Women Footwear</a>
            <a href="#">Watches and Accessories</a>
            <a href="#">Bag's, Suitcase and Luggage</a>
            <a href="#">Kids</a>
            <a href="#">Essential </a>
            <a href="#">Winter</a>

        </div>
     </div>
     <div className='right-menu1'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="appliances" />
        <p>Appliances</p>
     </div>
     <div className='right-menu1'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="travel" />
        <p>Travel</p>
     </div>
     <div className='right-menu1'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="top-offers" />
        <p>Top Offers</p>
     </div>
     <div className='right-menu1'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="beauty" />
        <p>Beauty, toys and more <IoIosArrowDropdownCircle className='down'/></p>
         <div className="dropdown-menu">
            <a href="#">Men's Bottom Wear</a>
            <a href="#">Women Ethnic</a>
            <a href="#">Women Western</a>
            <a href="#">Men Footwear</a>
            <a href="#">Women Footwear</a>
            <a href="#">Watches and Accessories</a>
            <a href="#">Bag's, Suitcase and Luggage</a>
            <a href="#">Kids</a>
            <a href="#">Essential </a>
            <a href="#">Winter</a>

        </div>
     </div>
     <div className='right-menu1'>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="two-wheeler" />
        <p>Two Wheelers</p>
     </div>
    </div>
  )
}

export default Products