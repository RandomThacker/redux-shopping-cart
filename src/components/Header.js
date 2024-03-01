import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/slices/cartSlice";
import { Badge, Button } from "@material-tailwind/react";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = cartItems.length;

  return (
    <>
      <header id="header" className="shadow-lg">
        <div className="bg-white h-24 px-10 py-5">
          <div className="relative flex justify-between">
          <img src="https://www.krishihrudya.com/assets/images/logo/logo.png" alt="item-img" className="bg-white rounded-xl w-24" />
            
            <div className="nav_menu">
              <div
                title="Cart"
                className="cart_icon"
                onClick={() => handleOpenCart(true)}
              >

                

                <Badge content={cartQuantity} className="bg-black">
                  <Button className="bg-[#fea621]"><img src="/images/bag-icon.svg" alt="bag-icon" /></Button>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
