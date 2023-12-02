/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
const HeadPhones = ({ data }) => {
  return (
    <>
      <div className="bg-black text-white py-8">
        <h1 className="uppercase text-center text-2xl font-bold">headphones</h1>
      </div>
      <ul>
        {data
          .filter((product) => product.category === "headphones")
          .map((product) => (
            <div key={product.id} className="w-full py-12">
              <div className="w-10/12 mx-auto">
                <img
                  src={product.image.mobile}
                  alt={product.name}
                  className="w-full"
                />
              </div>

              <div className="w-10/12 mx-auto flex flex-col items-center gap-4 mt-5">
                <p className="uppercase text-orange-400 text-sm wide-spacing font-extralight">
                  {product.new === true ? "new product" : ""}
                </p>
                <div className="w-1/2">
                  <h1 className="text-2xl font-extrabold uppercase text-center">
                    {product.name}
                  </h1>
                </div>

                <p className="text-center text-sm">{product.description}</p>
                <Link to={`/product/${product.id}`}>
                  <button
                    type=""
                    className="px-5 py-2 md:px-10 md:py-5 bg-orange-400 cursor-pointer"
                  >
                    <p className="text-sm uppercase text-white ">See Product</p>
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </ul>
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
      <section className="mb-32 mt-20">
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
          <p className="text-gray-400 text-center px-2 text-sm">
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
            <FaXTwitter className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeadPhones;
