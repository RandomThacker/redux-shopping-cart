import React from "react";
import Header from "./components/Header.js";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./pages/checkout";
import { Provider } from "react-redux";
import store from "./store/store";
import PhoneOtpForm from "./components/phone-login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from './pages/Payment';
import { Form } from './components/Form';
import OtpVerification from "./components/OtpVerification";
import Address from "./pages/Address.jsx";


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
              <Route path="/phone-login" element={<PhoneOtpForm />} />
              <Route path="/checkout" element={<Address/>} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/otp" element={<OtpVerification/>} />


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
