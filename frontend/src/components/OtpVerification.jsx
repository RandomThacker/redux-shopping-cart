import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function OtpVerification() {
  const [otp, setOtp] = useState('');

  return (
    <div className='flex flex-col align-center justify-center items-center'>
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
        border: "1px solid black",
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
    </div>
  );
}