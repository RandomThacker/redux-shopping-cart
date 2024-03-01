// checkout.js

import React, { useState } from "react";
import "./ckeckout.css";

const Checkout = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [address, setAddress] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleVerifyOtp = () => {
    // Implement OTP verification logic here (can be a backend API call)
    // For simplicity, let's assume OTP is valid if it matches '1234'
    if (otp === "1234") {
      setIsOtpVerified(true);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleProceedToPay = () => {
    // Implement payment logic or navigate to payment page
    // You can also send the address and other details to the backend
    console.log("Payment logic goes here");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <label>Phone Number</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        disabled={isOtpVerified}
      />

      {!isOtpVerified && (
        <>
          <label>OTP</label>
          <input type="text" value={otp} onChange={handleOtpChange} />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}

      {isOtpVerified && (
        <>
          <label>Address</label>
          <textarea value={address} onChange={handleAddressChange}></textarea>
        </>
      )}

      {isOtpVerified && (
        <button onClick={handleProceedToPay}>Proceed to Pay</button>
      )}
    </div>
  );
};

export default Checkout;
