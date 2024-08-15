import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import MarketingLogo from "@/components/MarketingLogo";
import React from "react";

export default function MarketingPage() {
  return (
    <div className=" h-full flex flex-col">
      <div
        className=" h-full flex flex-col justify-center items-center 
        text-center md:justify-start gap-y-8  flex-1 px-6 pb-10"
      >
        <Heading />
        <MarketingLogo />
      </div>
      <Footer />
    </div>
  );
}
