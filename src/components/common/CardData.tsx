"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CardProps {
  image: string;
  heading: string;
}

const Card = ({ image, heading }: CardProps) => {
  return (
    <div className="w-[100%] rounded-lg lg:w-[90%]">
      <Image
        src={image || "/placeholder.svg"}
        alt="CardImage"
        width={1000}
        height={300}
        className="rounded-lg"
      />
      <div className="flex flex-col float-left">
        <p className="text-[15px] font-medium leading-[30px] text-left text-[rgba(10,1,23,1)]">
          {heading}
        </p>
        <p className="text-[rgba(139,69,19,1)] font-medium text-sm leading-[25.2px] uppercase tracking-wider flex items-center">
          View Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </p>
      </div>
    </div>
  );
};

export default Card;
