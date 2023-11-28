import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/Home/Home";
import Speakers from "./Components/Pages/Speakers/Speakers";
import EarPhones from "./Components/Pages/EarPhones/EarPhones";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";
import HeadPhones from "./Components/Pages/HeadPhones/HeadPhones";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<HeadPhones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<EarPhones />} />
          <Route path="/cart" element={<CheckOut />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
