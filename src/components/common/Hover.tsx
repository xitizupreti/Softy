"use client";
import { MoveRight, MoveUpRight } from "lucide-react";
import { useState } from "react";

interface HoverProps {
  heading: string;
  url?: string;
}

const Hover = ({ heading, url }: HoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <p
      className="flex items-center gap-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url}>{heading}</a>
      {isHovered ? <MoveRight size={18} /> : <MoveUpRight size={18} />}
    </p>
  );
};

export default Hover;
