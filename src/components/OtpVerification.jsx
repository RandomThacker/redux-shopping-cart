import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Button } from "@material-tailwind/react";

export default function OtpVerification() {
  const [otp, setOtp] = useState('');

  return (
    <div className='h-screen flex flex-col align-center justify-center items-center'>
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      // renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      renderSeparator={<span style={{ width: "8px" }}></span>}
      isInputNum={true}
      shouldAutoFocus={true}
      inputStyle={{
        border: "1px solid transparent",
        borderRadius: "8px",
        width: "54px",
        height: "54px",
        fontSize: "12px",
        color: "#000",
        fontWeight: "400",
        caretColor: "blue"
      }}
      focusStyle={{
        border: "1px solid #CFD3DB",
        outline: "none"
      }}
    />
    <Button>Submit</Button>
    </div>
  );
}