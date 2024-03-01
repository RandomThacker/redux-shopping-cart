import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
        <img src="https://www.krishihrudya.com/assets/images/logo/logo.png" alt="logo-ct" className="w-10 bg-white" />
        <Typography color="white" className="text-center font-normal">
        &copy; 2024 Krishi Hrudya
      </Typography>
      </div>
    </footer>
  );
}