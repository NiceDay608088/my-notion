import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className=" hidden md:flex items-center gap-x-2 ">
      <Image src="/favicon.ico" alt="Logo" height={20} width={20} />
      <p className={cn(" font-semibold text-sm ", font.className)}>Motion</p>
    </div>
  );
};

export default Logo;
