/* eslint-disable react/prop-types */
import HeaderImage from "../images/home/desktop/headphone-hero-image.png";
import { Link } from "react-router-dom";

const HomeHero = ({ setActiveMenuRoute }) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black">
      <div className="lg:max-w-[1440px] lg:mx-auto bg-black flex flex-row justify-between lg:px-[165px]">
        <div
          className="bg lg:bg-none w-full py-[108px] flex lg:flex-row lg:w-full justify-center lg:justify-between 
        items-center mx-auto lg:mx-0 px-6 text-center bg-black"
        >
          <div className="flex flex-col text-whiteSmoke text-center items-center lg:text-left lg:items-start">
            <h3 className="text-sm tracking-[10px] opacity-40 mb-4">
              NEW PRODUCT
            </h3>
            <h1
              className="text-4xl lg:w-[396px] md:text-[56px] font-bold leading-10 md:leading-[58px] tracking-[1.3px] 
            md:tracking-[2px] mb-6 uppercase"
            >
              XX99 Mark II Headphones
            </h1>
            <p className="text-[15px] lg:w-[349px] font-medium leading-[25px] opacity-75 mb-7 lg:mb-10">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              to={"/headphones/product1"}
              onClick={() => setActiveMenuRoute(1)}
            >
              <button
                onClick={handleLinkClick}
                className="w-[160px] flex lg:mx-0 justify-center items-center text-center mx-auto py-[15px] px-7 bg-orange
                 hover:bg-lightOrange duration-500 text-[13px] tracking-[1px] font-bold uppercase"
              >
                See Product
              </button>
            </Link>
          </div>

          <div className="lg:min-w-[442px]">
            <img
              src={HeaderImage}
              alt="HeaderImage"
              className="hidden lg:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
