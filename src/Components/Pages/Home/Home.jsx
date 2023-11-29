import { useState, useEffect } from "react";
import "./Home.css";
import { IoIosArrowForward } from "react-icons/io";

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
        <section className="w-2/3 md:w-1/2 mx-auto py-4 flex flex-col items-center justify-center gap-6 absolute top-44 left-16 md:top-44 md:left-48 lg:left-0 lg:top-48 lg:px-20 lg:justify-start lg:items-start lg:gap-10">
          <p className="md:text-lg wide-spacing text-gray-400 font-light">
            NEW PRODUCT
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-white">
            XX99 Mark II <br />
            HeadphoneS
          </h1>
          <p className="text-sm md:text-xl text-gray-300 text-center lg:text-left">
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
      <section className="w-full mt-24 flex flex-col gap-24">
        <div className="w-10/12 h-48 mx-auto rounded-8 bg-gray-200 relative">
          <img
            src="/resources/assets/image-removebg-preview(41).png"
            alt=""
            className="absolute left-32 -top-14"
          />
          <div className="absolute bottom-10 left-32  flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-bold">headphones</h1>
            <p className="uppercase flex items-center gap-4 text-bolder">
              shop{" "}
              <span>
                <IoIosArrowForward className="text-orange-400" />
              </span>
            </p>
          </div>
        </div>
        <div className="w-10/12 h-48 mx-auto rounded-8 bg-gray-200 relative">
          <img
            src="/resources/assets/image-removebg-preview(38).png"
            alt=""
            className="absolute left-32 -top-14"
          />
          <div className="absolute bottom-10 left-32  flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-bold">speakers</h1>
            <p className="uppercase flex items-center gap-4 text-bolder">
              shop{" "}
              <span>
                <IoIosArrowForward className="text-orange-400" />
              </span>
            </p>
          </div>
        </div>
        <div className="w-10/12 h-48 mx-auto rounded-8 bg-gray-200 relative">
          <img
            src="/resources/assets/image-removebg-preview(42).png"
            alt=""
            className="absolute left-32 -top-14"
          />
          <div className="absolute bottom-10 left-32  flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-bold">earphones</h1>
            <p className="uppercase flex items-center gap-4 text-bolder">
              shop{" "}
              <span>
                <IoIosArrowForward className="text-orange-400" />
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>{/* {isMobile && ()} */}</section>
    </>
  );
};
export default Home;
