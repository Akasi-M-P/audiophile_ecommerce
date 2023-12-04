/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const NavBar = ({
  onOpenCart,
  updateModalOnCartIconClick,
  setUpdateModalOnCartIconClick,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCartIconClick = () => {
    setUpdateModalOnCartIconClick(true);
    onOpenCart(); // Call the provided function to open the cart modal
  };

  return (
    <header className="bg-black text-white relative z-10">
      {!isMobile ? (
        <nav className="w-full flex items-center justify-between px-20 py-10">
          <div>
            <Link to="/">
              <p className="text-2xl font-extrabold">audiophile</p>
            </Link>
          </div>
          <div className="flex gap-10">
            <div>
              <Link to="/">
                <p className="uppercase hover:text-orange-500">home</p>
              </Link>
            </div>
            <div>
              <Link to="/headphones">
                <p className="uppercase hover:text-orange-500">headphones</p>
              </Link>
            </div>
            <div>
              <Link to="/speakers">
                <p className="uppercase hover:text-orange-500">speakers</p>
              </Link>
            </div>
            <div>
              <Link to="/earphones">
                <p className="uppercase hover:text-orange-500">earphones</p>
              </Link>
            </div>
          </div>

          <div>
            <IoCartOutline
              className="w-8 h-8 cursor-pointer"
              onClick={handleCartIconClick}
            />
          </div>
        </nav>
      ) : (
        <nav className="w-full flex items-center justify-between px-5 py-5 md:relative">
          <div className="w-12">
            <FaBars className="w-8 h-8 cursor-pointer" />
          </div>
          <div>
            <Link to="/">
              <p className="text-xl font-bold cursor-pointer md:absolute md:left-20 md:top-5">
                audiophile
              </p>
            </Link>
          </div>
          <div className="w-12">
            <IoCartOutline
              className="w-8 h-8 cursor-pointer"
              onClick={handleCartIconClick}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
