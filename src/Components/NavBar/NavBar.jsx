import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const NavBar = () => {
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
  return (
    <>
      <header className="bg-black text-white ">
        {/* Desktop and Upwards */}
        {!isMobile && (
          <nav className="">
            {/* ... your existing desktop navigation code ... */}
            <div>
              <Link to="/">
                <p>audiophile</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <p className="uppercase">home</p>
              </Link>
            </div>
            <div>
              <Link to="/headphones">
                <p className="uppercase">headphones</p>
                <div>
                  <Link to="/speakers">
                    <p className="uppercase">speakers</p>
                  </Link>
                </div>
                <div>
                  <Link to="/earphones">
                    <p className="uppercase">earphones</p>
                  </Link>
                </div>
                <div></div>
                <div>
                  <IoCartOutline />
                </div>
              </Link>
            </div>
          </nav>
        )}
        {/* Mobile and Tablet */}
        {isMobile && (
          <nav className=" w-full flex items-center justify-between px-5 py-5 md:relative">
            {/* ... your existing mobile navigation code ... */}
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
              <IoCartOutline className="w-8 h-8 cursor-pointer" />
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
export default NavBar;
