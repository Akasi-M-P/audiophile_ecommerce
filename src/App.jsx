import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "/resources/data.json";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/Home/Home";
import Speakers from "./Components/Pages/Speakers/Speakers";
import EarPhones from "./Components/Pages/EarPhones/EarPhones";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";
import HeadPhones from "./Components/Pages/HeadPhones/HeadPhones";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";
import CartModal from "./Components/Cart/CartModal";

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const handleOpenCart = () => {
    setCartModalOpen(true);
  };

  const handleCloseCart = () => {
    setCartModalOpen(false);
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedQuantities = {
      ...quantities,
      [itemId]: newQuantity,
    };

    setQuantities(updatedQuantities);

    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: newQuantity,
            totalPrice: item.price * newQuantity,
          }
        : item
    );

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const saveCartToLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <>
      <Router>
        <NavBar
          onOpenCart={handleOpenCart}
          cart={cart}
          setUpdateModalOnCartIconClick={setCartModalOpen}
        />
        {isCartModalOpen && (
          <CartModal
            onClose={handleCloseCart}
            onRemoveAll={() => {
              setCart([]);
              setQuantities({});
              saveCartToLocalStorage([]);
            }}
            onRemoveItem={handleRemoveFromCart}
            onCheckout={() => console.log("Checkout")}
            cart={cart}
            quantities={quantities}
            onUpdateQuantity={handleUpdateQuantity}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<HeadPhones data={data} />} />
          <Route path="/speakers" element={<Speakers data={data} />} />
          <Route path="/earphones" element={<EarPhones data={data} />} />
          <Route path="/cart" element={<CheckOut />} />
          <Route
            path="/product/:productId"
            element={
              <ProductDetail
                data={data}
                updateModalOnCartIconClick={setCartModalOpen}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
