import { useState, useEffect } from "react";
import "./Home.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
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
      <section className="hero z-0">
        <section className="w-2/3 md:w-1/2 mx-auto py-4  flex flex-col items-center justify-center gap-6 absolute top-44 left-16 md:top-44 md:left-48 lg:left-0 lg:top-48 2xl:top-56 lg:px-20 lg:justify-start lg:items-start lg:gap-5 2xl:gap-10">
          <p className="md:text-lg 2xl:text-xl wide-spacing text-gray-400 font-light">
            NEW PRODUCT
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-2xl 2xl:text-5xl lg:font-bold font-extrabold uppercase text-white">
            XX99 Mark II <br />
            HeadphoneS
          </h1>
          <p className="text-sm md:text-xl lg:text-lg text-gray-300 text-center lg:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            type=""
            className="px-5 py-2 md:px-10 md:py-5 bg-orange-400 cursor-pointer"
          >
            <p className="text-sm uppercase text-white ">See Product</p>
          </button>
        </section>
      </section>
      {/* END OF HERO SECTION */}
      <section className="w-full md:px-10 mt-24 lg:mt-52 flex flex-col gap-24 md:gap-5 mb-40 md:flex-row">
        <div className="w-10/12 md:w-1/3 lg:w-1/3 h-48 xl:h-64 mx-auto rounded-8 bg-gray-200 relative rounded-md">
          <img
            src="/assets/image-removebg-preview(41)-desk.png"
            alt=""
            className="w-28 absolute left-28 -top-14 md:left-12 lg:left-24 xl:left-32 2xl:left-44"
          />
          <div className="absolute bottom-5 2xl:bottom-10 left-32 md:left-16 lg:left-24 xl:left-32 2xl:left-44 xl:bottom-5  flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-bold text-sm md:text-md lg:text-lg xl:text-xl">
              headphones
            </h1>
            <Link to="/headphones">
              <p className="uppercase flex items-center gap-2 text-bolder text-sm md:text-md xl:text-lg">
                shop{" "}
                <span>
                  <IoIosArrowForward className="text-orange-400" />
                </span>
              </p>
            </Link>
          </div>
        </div>
        <div className="w-10/12 md:w-1/3 lg:w-1/3  h-48 xl:h-64 mx-auto rounded-8 bg-gray-200 relative rounded-md">
          <img
            src="/assets/image-removebg-preview(38)-desk.png"
            alt=""
            className="w-28 absolute left-28 -top-14 md:left-12 lg:left-24 xl:left-32 2xl:left-44"
          />
          <div className="absolute bottom-5 2xl:bottom-10 left-32 md:left-16 lg:left-24 xl:left-32 2xl:left-44  flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-bold text-sm md:text-md lg:text-lg xl:text-xl ">
              speakers
            </h1>
            <Link to="/speakers">
              <p className="uppercase flex items-center gap-2 text-bolder text-sm md:text-md xl:text-lg">
                shop{" "}
                <span>
                  <IoIosArrowForward className="text-orange-400" />
                </span>
              </p>
            </Link>
          </div>
        </div>
        <div className="w-10/12 md:w-1/3  lg:w-1/3 h-48 xl:h-64 mx-auto rounded-8 bg-gray-200 relative rounded-md">
          <img
            src="/assets/image-removebg-preview(42)-desk.png"
            alt=""
            className="w-28 absolute left-28 -top-14 md:left-12 lg:left-24 xl:left-32 2xl:left-44"
          />
          <div className="absolute bottom-5 2xl:bottom-10 left-32 md:left-16 lg:left-24 xl:left-32 2xl:left-44  flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-bold text-sm md:text-md lg:text-lg xl:text-xl">
              earphones
            </h1>
            <Link to="/earphones">
              <p className="uppercase flex items-center gap-2 text-bolder text-sm md:text-md xl:text-lg">
                shop{" "}
                <span>
                  <IoIosArrowForward className="text-orange-400" />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section>{/* {isMobile && ()} */}</section>
    </>
  );
};
export default Home;
