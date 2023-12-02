/* eslint-disable react/prop-types */
// ProductDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const ProductDetail = ({ data }) => {
  // State to track the quantity
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const navigate = useNavigate();
  const product = data.find((p) => p.id.toString() === productId);

  console.log("Product ID from URL:", productId);
  console.log(
    "All product IDs in data:",
    data.map((p) => p.id)
  );

  if (!product) {
    console.error(`Product with ID ${productId} not found`);
    return <div>Loading...</div>;
  }

  console.log("Product found:", product);

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to handle quantity change
  const handleQuantityChange = (newQuantity) => {
    // Ensure quantity does not go below 1
    const updatedQuantity = Math.max(1, newQuantity);
    setQuantity(updatedQuantity);
  };

  // Function to handle add to cart
  const handleAddToCart = () => {
    // Check if the requested quantity is available in stock
    if (quantity <= product.quantity) {
      // Implement your logic for adding to cart
      console.log(`Added ${quantity} ${product.name}(s) to the cart`);
    } else {
      console.log(`Not enough stock available for ${product.name}`);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="w-10/12 mx-auto py-5">
          <Link to="`/product/${productId}`">
            <div>
              <button onClick={goBack}>Go Back</button>
            </div>
          </Link>
        </div>

        <div className="w-full">
          <div className="w-10/12 mx-auto">
            <img
              src={product.image.mobile}
              alt={product.name}
              className="w-full"
            />
          </div>

          <div className="w-10/12 mx-auto flex flex-col  gap-4 mt-5 mb-5">
            <p className="uppercase text-orange-400 text-sm wide-spacing font-extralight">
              {product.new === true ? "new product" : ""}
            </p>
            <div className="w-1/2">
              <h1 className="text-xl font-extrabold uppercase text-left">
                {product.name}
              </h1>
            </div>

            <p className="text-left text-sm">{product.description}</p>
            <p className="text-sm font-bold">
              $ {product.price.toLocaleString()}
            </p>
          </div>
          <div className="w-10/12 mx-auto flex gap-4">
            <div className="w-32 border border-transparent bg-gray-200 pl-3">
              <button onClick={() => handleQuantityChange(quantity - 1)}>
                -
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={(e) =>
                  handleQuantityChange(parseInt(e.target.value, 10))
                }
                className=" w-20 px-2 py-2 text-center text-sm bg-gray-200"
              />
              <button onClick={() => handleQuantityChange(quantity + 1)}>
                +
              </button>
            </div>

            {/* Add to Cart button */}
            <button
              onClick={handleAddToCart}
              className="w-32 bg-orange-400 text-white text-sm uppercase"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div>
          <div className="w-10/12 mx-auto mt-12">
            <h1 className="uppercase mb-5 font-bold">features</h1>
            <p className="text-sm">
              {product.features
                .split("\n\n")
                .slice(0, 2)
                .map((paragraph, index) => (
                  <p key={index} className="mb-8">
                    {paragraph}
                  </p>
                ))}
            </p>
          </div>
          <div className="w-10/12 mx-auto">
            <ul>
              {product.includes.map((item, index) => (
                <li key={index} className="py-2">
                  <p className="text-sm">
                    <span className="text-orange-400 pr-4">
                      {item.quantity}x
                    </span>
                    {item.item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-16">
          <div className="w-10/12 mx-auto flex flex-col gap-4">
            <img
              src={product.gallery.first.mobile}
              alt={product.name}
              className="rounded-md"
            />
            <img
              src={product.gallery.second.mobile}
              alt={product.name}
              className="rounded-md"
            />
          </div>
          <div className="w-10/12 mx-auto">
            <img
              src={product.gallery.third.mobile}
              alt={product.name}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="w-10/12 mx-auto text-center py-5">
          <h1 className="uppercase font-extrabold text-xl">
            you may also like
          </h1>
        </div>

        <div>
          {product.others.map((product) => (
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
        </div>
      </div>
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

export default ProductDetail;
