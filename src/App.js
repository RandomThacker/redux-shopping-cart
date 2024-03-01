import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./pages/checkout";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import Payment from './pages/Payment';
import { Form } from './components/Form';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <>
            <Header />
            <Routes>
              {" "}
              {/* Use Routes instead of Switch */}
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Cart />
            <Footer />
          </>
        </Router>
      </Provider>
    </>
  );
};

export default App;
