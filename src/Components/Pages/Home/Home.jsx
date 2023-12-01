import { useState, useEffect } from "react";
import "./Home.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

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
      <section className="w-full md:px-10 mt-24 lg:mt-52 flex flex-col gap-24 md:gap-5 mb-28 md:flex-row">
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
      {/* CATEGORIES END HERE */}
      <section className="w-10/12 mx-auto relative rounded-md mb-5 bg-orange-500 orange-container">
        <img
          src="/resources/assets/home/mobile/image-speaker-zx9.png"
          alt=""
          className="w-44 absolute speaker"
        />
        <img
          src="/assets/Oval-inner.png"
          alt=""
          className="absolute inner-oval"
        />
        <img
          src="/assets/Oval Copy-outer.png "
          alt=""
          className="absolute outer-oval"
        />
        <div className="absolute  w-10/12 flex flex-col items-center gap-6 speaker-detail">
          <h1 className="text-white text-center text-4xl font-extrabold">
            ZX9 <br />
            SPEAKER
          </h1>
          <p className="text-gray-200 font-light text-sm text-center">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button type="" className="uppercase text-white bg-black px-4 py-4">
            <p>see product</p>
          </button>
        </div>
      </section>
      <section className="w-3/4 mx-auto relative rounded-md mb-5 orange-container-2">
        <h1 className="absolute top-24 left-9 text-2xl font-extrabold">
          ZX7 SPEAKER
        </h1>
        <button
          type=""
          className="uppercase absolute text-sm bottom-24 left-9 px-4 py-4 border border-black"
        >
          see product
        </button>
      </section>
      <section className="w-10/12 mx-auto relative  mb-5">
        <img
          src="/resources/assets/home/mobile/image-earphones-yx1.jpg"
          alt=""
          className="w-full rounded-lg"
        />
      </section>
      <section className="w-10/12 md:w-1/3 lg:w-1/3  h-48 xl:h-64 mx-auto rounded-8 bg-gray-200 relative rounded-md mb-32 relative">
        <h1 className="absolute top-10 left-9 text-2xl font-extrabold">
          YX1 EARPHONES
        </h1>
        <button
          type=""
          className="uppercase absolute text-sm bottom-10 left-9 px-4 py-4 border border-black"
        >
          see product
        </button>
      </section>
      <section className="mb-32">
        <img
          src="/assets/Bitmap-manHP.png"
          alt=""
          className="w-10/12 mx-auto mb-10"
        />
        <div className="w-10/12 mx-auto mb-5">
          <h1 className="uppercase text-black text-3xl font-extrabold text-center mb-10">
            Bringing you the <span className="text-orange-400">best</span> audio
            gear
          </h1>
          <p className="text-gray-400 text-center px-2">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
      <section className="w-full bg-black py-10">
        <nav className="w-full items-center  ">
          {/* ... your existing desktop navigation code ... */}
          <div className="mb-12">
            <Link to="/">
              <p className="text-2xl font-extrabold text-center text-white">
                audiophile
              </p>
            </Link>
          </div>
          <div className="flex flex-col text-white text-sm items-center justify-center gap-10">
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
        </nav>
        <div className="py-10 px-2">
          <p className="text-gray-400 text-center text-sm">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-10">
          <div>
            <p className="text-gray-400 text-center">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="text-white flex items-center justify-center gap-5">
            <FaFacebookSquare className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
          </div>
        </div>
      </section>

      <section>{/* {isMobile && ()} */}</section>
    </>
  );
};
export default Home;
