import {
    Card,
    Input,
    Button,
    Typography,
    Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  } from "@material-tailwind/react";
  import React from "react";
import OtpVerification from "./OtpVerification";
   
  export function AddressPage() {
    const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
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
              placeholder="name@mail.com"
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
              placeholder="name@mail.com"
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
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
            Flat, House no., Building, Company, Apartment
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
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
              placeholder="name@mail.com"
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
              placeholder="name@mail.com"
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
              placeholder="name@mail.com"
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
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        <div className="text-transparent">-</div>
          <Button className="mt-6" fullWidth>
            pay now
          </Button>
          <div className="text-transparent">-</div>
          <div className="text-transparent">-</div>
        </form>
      </Card>
       <Dialog open={open} handler={handleOpen} className="flex flex-col items-center">
       <DialogHeader>Please enter the OTP</DialogHeader>
       <DialogBody>
         <OtpVerification/>
       </DialogBody>
       <DialogFooter>
         <Button variant="gradient" color="green" fullWidth onClick={handleOpen}>
           Confirm
         </Button>
       </DialogFooter>
     </Dialog>
     </>
    );
  }