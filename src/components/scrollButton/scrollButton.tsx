"use client";

import { Link } from "react-scroll";
import { ScrollButtonProps } from "./scrollButton.types";

export const ScrollButton: React.FC<ScrollButtonProps> = ({
  label,
  to,
  className,
  smooth = true,
  duration = 500,
}) => {
  return (
    <Link
      to={to}
      smooth={smooth}
      duration={duration}
      className={`hidden cursor-pointer md:inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md text-sm transition duration-300 ${className} uppercase`}
    >
      {label}
    </Link>
  );
};
