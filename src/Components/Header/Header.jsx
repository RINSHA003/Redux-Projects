import React from "react";
import { IoCartSharp } from "react-icons/io5";
import "../Header/Header.css";
import { useSelector } from "react-redux";

const Header = () => {
 const {cartList}=useSelector((state)=>state.cart)
 console.log(cartList.length)

//  const totalcartlength = cartList.reduce((acc,value)=>acc += value.count,0)
  return (
    <header>
      <header>
        <div class="container">
              <h1>logo</h1>
          <div class="right-section">
              <IoCartSharp class='custom-icon'/>
            <div class="cart-count-header">{cartList.length}</div>
          </div>
        </div>
      </header>
    </header>
  );
};

export default Header;
