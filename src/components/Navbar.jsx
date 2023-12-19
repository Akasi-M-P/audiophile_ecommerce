/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Hamburger from "../images/shared/tablet/icon-hamburger.svg";
import Logo from "../images/shared/audiophile-logo.svg";
import Cart from "../images/shared/icon-cart.svg";
import Close from "../images/shared/tablet/icon-close-menu.svg";
import Arrow from "../images/shared/arrow.svg";
import Shadow from "../images/shared/shadow.png";
import { Link } from "react-router-dom";
import { menuListArray } from "../components/menuListArray";
import Products from "./Products";
import { motion } from "framer-motion";

const Navbar = ({
  mobileMenu,
  setMobileMenu,
  activeMenuRoute,
  setActiveMenuRoute,
  productAmount,
  addToCart,
  cartOverlay,
  setCartOverlay,
  setCheckoutRoute,
}) => {
  return (
    <div className="bg-black">
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 3, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:max-w-[1440px] lg:sticky lg:top-0 lg:right-0 lg:left-0 max-w-full z-[100] flex lg:mx-auto justify-between items-center bg-black px-6 md:px-[39px] lg:px-[165px] py-8 lg:py-9">
          {mobileMenu ? (
            <img
              onClick={() => setMobileMenu(false)}
              src={Close}
              alt="Close"
              className="lg:hidden cursor-pointer z-[100]"
            />
          ) : (
            <img
              onClick={() => setMobileMenu(true)}
              src={Hamburger}
              alt="Hamburger"
              className="lg:hidden cursor-pointer z-[100]"
            />
          )}
          {mobileMenu ? (
            <div className="absolute z-[100] top-20 left-0 right-0 flex flex-col items-center gap-5 bg-black w-full h-32 lg:hidden">
             
              <ul className="text-white z-[100]  lg:flex items-center gap-8">
                {menuListArray.map((item, index) => {
                  return (
                    <li
                      onClick={() => {
                        setActiveMenuRoute(index);
                        setCheckoutRoute(false);
                        setCartOverlay(false);
                      }}
                      key={item.id}
                      className={`${
                        index === activeMenuRoute ? "text-orange" : ""
                      } text-[13px] font-bold leading-6 tracking-[2px] uppercase cursor-pointer hover:text-orange transition-all duration-400`}
                    >
                      <Link to={item.to}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
              <div>
                
              </div>
            </div>
          ) : (
            ""
          )}
          <Link
            to={"/"}
            onClick={() => {
              setActiveMenuRoute(0);
              setCheckoutRoute(false);
              setCartOverlay(false);
              setMobileMenu(false);
            }}
            className="z-[100]"
          >
            <img src={Logo} alt="Logo" className="cursor-pointer z-50" />
          </Link>
          <ul className="text-white z-[100] hidden lg:flex items-center gap-8">
            {menuListArray.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setActiveMenuRoute(index);
                    setCheckoutRoute(false);
                    setCartOverlay(false);
                  }}
                  key={item.id}
                  className={`${
                    index === activeMenuRoute ? "text-orange" : ""
                  } text-[13px] font-bold leading-6 tracking-[2px] uppercase cursor-pointer hover:text-orange transition-all duration-400`}
                >
                  <Link to={item.to}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <div>
            <div
              className="relative z-[100] cursor-pointer"
              onClick={() => {
                setCartOverlay(!cartOverlay);
                setMobileMenu(false);
              }}
            >
              <img
                src={Cart}
                alt="Cart"
                className="cursor-pointer z-30 relative"
              />
              {productAmount > 0 && addToCart === true ? (
                <div className="absolute -top-4 left-1 bg-orange text-whiteSmoke w-6 h-4 rounded-full flex justify-center font-bold items-center text-sm text-center">
                  <p>{productAmount}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="md:px-[39px] lg:px-[165px] lg:max-w-[1440px] lg:mx-auto">
          <div className="w-full bg-white h-[1px] opacity-20"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
