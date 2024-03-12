import React from "react";
// import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
} from "@material-tailwind/react";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";

export default function PaymentCard() {
  return (
    <Card className="w-[24rem]">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center w-[24rem]"
      >
        <div className="mb-4 h-20 p-6 text-white">
          <h1 className="text-2xl font-bold">₹ 2700</h1>
        </div>
        <Typography variant="h5" color="white"></Typography>
      </CardHeader>
      <CardBody>
        <form className="mt-12 flex flex-col gap-4">
          <div className="my-6 flex flex-col items-center">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-bold text-left"
            >
              Scan the QR Code to Pay the amount
            </Typography>
            <img
              src="https://www.techopedia.com/wp-content/uploads/2023/03/aee977ce-f946-4451-8b9e-bba278ba5f13.png"
              style={{ width: "200px" }}
            />
          </div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-bold"
          >
            Upload the screenshot of the payment
          </Typography>
          <input type="file" id="file-input" name="ImageStyle" />
          <Button size="lg">pay</Button>
          <Typography
            variant="small"
            color="gray"
            className="flex items-center justify-center gap-2 font-medium opacity-60"
          >
            <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are secure
            and encrypted
          </Typography>
        </form>
      </CardBody>
    </Card>
  );
}
