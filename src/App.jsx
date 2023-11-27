import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/Home/Home";
import Speakers from "./Components/Pages/Speakers/Speakers";
import EarPhones from "./Components/Pages/EarPhones/EarPhones";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<EarPhones />} />
          <Route path="/cart" element={<CheckOut />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
