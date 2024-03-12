import {
  Card,
  Input,
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  MenuItem,
  DialogFooter,
} from "@material-tailwind/react";
import React, { useState } from "react";
// import OtpVerification from "./OtpVerification";
import axios from "axios";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

function OtpVerification({ onOtpChange }) {
  const [otp, setOtp] = useState("");

  // Function to handle OTP change
  const handleOtpChange = (otp) => {
    setOtp(otp);
    onOtpChange(otp); // Call the function passed from the parent component
  };

  return (
    <div className="flex flex-col align-center justify-center items-center">
      <OtpInput
        value={otp}
        onChange={handleOtpChange}
        numInputs={4}
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
          caretColor: "blue",
        }}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none",
        }}
      />
    </div>
  );
}

// export default OtpVerification;
export function AddressPage() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [otpValue, setOtpValue] = useState(""); // State to hold the OTP value
  const handleOtpChange = (otp) => {
    setOtpValue(otp);
  };

  // State to store form values including OTP
  const [values, setValues] = useState({
    name: "",
    number: "",
    pincode: "",
    add1: "",
    add2: "",
    landmark: "",
    city: "",
    state: "",
    otp: "", // Include OTP field in the state
  });

  // Function to generate a random 4-digit OTP
  const generateOTP = () => {
    const genotp = Math.floor(1000 + Math.random() * 9000);
    setValues({ ...values, otp: genotp.toString() }); // Update the OTP in state
    console.log(genotp);
  };

  // Handle form input change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen1((cur) => !cur);

    // Send the form data including OTP to the backend
    axios
      .post("http://localhost:8000/address", values)
      .then((res) => {
        console.log(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error("Error:", err);
        // alert("An error occurred. Please try again later.");
      });
  };

  const handleOpen = (e) => {
    setOpen(!open);
    e.preventDefault();
    generateOTP(); // Generate OTP when "verify" button is clicked

    // Send OTP to backend after the state update is complete
    setValues((prevValues) => {
      axios
        .post("http://localhost:8008/sms", {
          ...prevValues,
          otp: prevValues.otp,
        })
        .then((res) => {
          console.log(JSON.stringify(res.data));
        })
        .catch((err) => {
          console.error("Error:", err);
          // alert("An error occurred. Please try again later.");
        });
      return prevValues;
    });
  };

  const handlePhonepe = () => {
    const amount = 1100; // Set a constant amount value
    const id = "K" + Math.floor(1000000000000000 + Math.random() * 9000000000000000); // Set a constant Id with "K" prefix and 16 random digits
    
    // Send amount and id to backend
    axios
      .post("http://localhost:3003/paydata", {
        amount: amount,
        id: id,
      })
      .then((res) => {
        console.log("Response:", res.data);
  
        // Redirect to localhost:3000/pay
        // window.location.href = "http://localhost:3003/pay";
      })
      .catch((err) => {
        console.error("Error:", err);
        // Handle error
      });
  };

  // Handle OTP confirmation
  // Handle OTP confirmation
  const handleOTP = () => {
    // Compare the randomly generated OTP (values.otp) with the user-entered OTP (otpValue)
    if (values.otp === otpValue) {
      console.log("OTP verified"); // Log if OTP is verified
    } else {
      console.log("OTP Not verified"); // Log if OTP is not verified
    }
    setOpen(false); // Close the dialog
  };

  return (
    <>
      <Card color="transparent" shadow={false}>
        <div className="text-transparent">-</div>
        <div className="text-transparent">-</div>
        <Typography variant="h4" color="blue-gray">
          Checkout
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Full Name
            </Typography>
            <Input
              size="lg"
              placeholder="Joe Biden"
              onChange={handleChange}
              name="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Phone Number
            </Typography>
            <div className="flex gap-2">
              <Input
                size="lg"
                placeholder="999999999"
                onChange={handleChange}
                name="number"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Button onClick={handleOpen} variant="gradient">
                verify
              </Button>
            </div>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Pincode
            </Typography>
            <Input
              size="lg"
              placeholder="123456"
              onChange={handleChange}
              name="pincode"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Flat, House no., Building,
            </Typography>
            <Input
              size="lg"
              placeholder="Landsdown Apartment, Flat number- 000"
              onChange={handleChange}
              name="add1"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Area, Street, Sector, Village
            </Typography>
            <Input
              size="lg"
              placeholder="White House"
              onChange={handleChange}
              name="add2"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Landmark
            </Typography>
            <Input
              size="lg"
              placeholder="Great Wall of China"
              onChange={handleChange}
              name="landmark"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Town/City
            </Typography>
            <Input
              size="lg"
              placeholder="France"
              onChange={handleChange}
              name="city"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              State
            </Typography>
            <Input
              size="lg"
              placeholder="United States"
              onChange={handleChange}
              name="state"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="text-transparent">-</div>
          <Button className="mt-6" fullWidth onClick={handleSubmit}>
            pay now
          </Button>
          <div className="text-transparent">-</div>
          <div className="text-transparent">-</div>
        </form>
      </Card>
      <Dialog
        open={open}
        handler={handleOTP}
        className="flex flex-col items-center"
      >
        <DialogHeader>Please enter the OTP</DialogHeader>
        <DialogBody>
          <OtpVerification onOtpChange={handleOtpChange} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            fullWidth
            onClick={handleOTP}
          >
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
      <Dialog size="xs" open={open1} handler={handleSubmit}>
        <DialogHeader className="justify-between">
          <div>
            <Typography variant="h5" color="blue-gray" className="text-center">
              Choose a Payment Menthod
            </Typography>
          </div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll !px-5">
          <div className="mb-6">
            <ul className="mt-3 -ml-2 flex flex-col gap-1">
              <MenuItem className="mb-4 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                  onClick={handlePhonepe}
                >
                  Pay using PhonePe
                </Typography>
              </MenuItem>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-center"
              >
                1.8% tax will be levied on the total amount
              </Typography>
              <br></br>
              <MenuItem className="mb-1 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://static-00.iconduck.com/assets.00/qr-scan-icon-2048x2048-aeh36n7y.png"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Link to="/Payment">
                  <Typography
                    className="uppercase"
                    color="blue-gray"
                    variant="h6"
                  >
                    Pay using QR Code
                  </Typography>
                </Link>
              </MenuItem>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-center"
              >
                Pay using your UPI app and upload the screenshot!
                <br />
                No tax levied :D
              </Typography>
            </ul>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
