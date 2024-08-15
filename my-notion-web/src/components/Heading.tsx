import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-5xl md:text-4xl md:font-bold">
        Your Ideas, Documents, & Plans. Welcome to{" "}
        <span className="underline">Motion</span>
      </h1>
      <h3 className="md:text-xl font-medium">
        Motion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter Motion <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
