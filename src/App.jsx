/* eslint-disable no-undef */
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import React, { useEffect, useState } from "react";
import FooterHero from "./components/FooterHero";
import Footer from "./components/Footer";
import HeadphoneFirstProduct from "./components/Headphones/HeadphoneFirstProduct";
import HeadphonesSecondProduct from "./components/Headphones/HeadphonesSecondPrduct";
import HeadphonesLastProduct from "./components/Headphones/HeadphonesLastProduct";
import SpeakersFirstProduct from "./components/Speakers/SpeakersFirstProduct";
import SpeakersSecondProduct from "./components/Speakers/SpeakersSecondProduct";
import EarphoneWireless from "./components/Earphones/EarphoneWireless";
import CartOverlay from "./components/CartOverlay";
import Checkout from "./components/Checkout/Checkout";

/* eslint-disable no-undef */

// Assuming imports are handled elsewhere, and React Router is set up

/* eslint-disable no-undef */

// Assuming imports are handled elsewhere, and React Router is set up

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenuRoute, setActiveMenuRoute] = useState(0);
  const [XX99MarkIIAmout, setXX99MarkIIAmout] = useState(0);
  const [XX99MarkIAmout, setXX99MarkIAmout] = useState(0);
  const [XX59MarkIAmout, setXX59MarkIAmout] = useState(0);
  const [ZX9Amount, setZX9Amount] = useState(0);
  const [ZX7Amount, setZX7Amount] = useState(0);
  const [YX1Amount, setYX1Amount] = useState(0);
  const [productAmount, setProductAmount] = useState(
    XX99MarkIIAmout +
      XX99MarkIAmout +
      XX59MarkIAmout +
      ZX9Amount +
      ZX7Amount +
      YX1Amount
  );
  const [addToCart, setAddToCart] = useState(false);
  const [cartOverlay, setCartOverlay] = useState(false);
  const [totalCost] = useState(0);
  const [checkoutRoute, setCheckoutRoute] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setProductAmount(
      XX99MarkIIAmout +
        XX99MarkIAmout +
        XX59MarkIAmout +
        ZX9Amount +
        ZX7Amount +
        YX1Amount
    );
  }, [
    XX99MarkIIAmout,
    XX99MarkIAmout,
    XX59MarkIAmout,
    ZX9Amount,
    ZX7Amount,
    YX1Amount,
  ]);

  return React.createElement(
    "div",
    {
      className: `relative w-full h-screen bg-[#FAFAFA] ${mobileMenu ? "" : ""}`,
    },
    Navbar({
      mobileMenu,
      setMobileMenu,
      activeMenuRoute,
      setActiveMenuRoute,
      productAmount,
      addToCart,
      setAddToCart,
      XX99MarkIIAmout,
      XX99MarkIAmout,
      cartOverlay,
      setCartOverlay,
      checkoutRoute,
      setCheckoutRoute,
    }),

    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: "/",
        element: Home({
          activeMenuRoute,
          setActiveMenuRoute,
        }),
      }),

      React.createElement(Route, {
        path: "/headphones",
        element: Headphones(),
      }),

      // Headphone product pages
      React.createElement(Route, {
        path: "/headphones/product1",
        element: HeadphoneFirstProduct({
          setActiveMenuRoute,
          productAmount,
          setProductAmount,
          setAddToCart,
          XX99MarkIIAmout,
          setXX99MarkIIAmout,
        }),
      }),

      React.createElement(Route, {
        path: "/headphones/product2",
        element: HeadphonesSecondProduct({
          setActiveMenuRoute,
          productAmount,
          setProductAmount,
          setAddToCart,
          XX99MarkIAmout,
          setXX99MarkIAmout,
        }),
      }),

      React.createElement(Route, {
        path: "/headphones/product3",
        element: HeadphonesLastProduct({
          setActiveMenuRoute,
          productAmount,
          XX59MarkIAmout,
          setXX59MarkIAmout,
          setAddToCart,
        }),
      }),

      React.createElement(Route, {
        path: "/speakers",
        element: Speakers(),
      }),

      // Speakers Product Pages
      React.createElement(Route, {
        path: "/speakers/product1",
        element: SpeakersFirstProduct({
          setActiveMenuRoute,
          productAmount,
          ZX9Amount,
          setZX9Amount,
          setAddToCart,
        }),
      }),

      React.createElement(Route, {
        path: "/speakers/product2",
        element: SpeakersSecondProduct({
          setActiveMenuRoute,
          productAmount,
          ZX7Amount,
          setZX7Amount,
          setAddToCart,
        }),
      }),

      // Earphones Product pages
      React.createElement(Route, {
        path: "/earphones",
        element: Earphones(),
      }),

      React.createElement(Route, {
        path: "/earphones/product1",
        element: EarphoneWireless({
          setActiveMenuRoute,
          productAmount,
          YX1Amount,
          setYX1Amount,
          setAddToCart,
        }),
      }),

      React.createElement(Route, {
        path: "/checkout",
        element: Checkout({
          productAmount,
          totalCost,
          XX99MarkIIAmout,
          XX99MarkIAmout,
          XX59MarkIAmout,
          ZX9Amount,
          ZX7Amount,
          YX1Amount,
          activeMenuRoute,
          setActiveMenuRoute,
          popup,
          setPopup,
        }),
      })
    ),

    cartOverlay
      ? CartOverlay({
          cartOverlay,
          setCartOverlay,
          productAmount,
          setProductAmount,
          XX99MarkIIAmout,
          addToCart,
          setXX99MarkIIAmout,
          totalCost,
          XX99MarkIAmout,
          setXX99MarkIAmout,
          XX59MarkIAmout,
          setXX59MarkIAmout,
          ZX9Amount,
          setZX9Amount,
          ZX7Amount,
          setZX7Amount,
          YX1Amount,
          setYX1Amount,
          checkoutRoute,
          setCheckoutRoute,
        })
      : null,

    checkoutRoute ? null : FooterHero({
      activeMenuRoute,
      setActiveMenuRoute,
    }),

    React.createElement(
      "div",
      { className: `${popup ? "hidden" : "block"}` },
      Footer({
        activeMenuRoute,
        setActiveMenuRoute,
      })
    )
  );
};

export default App;
