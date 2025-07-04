"use client";

import { FC } from "react";
import { AboutCardProps } from "./aboutCard.types";

export const AboutCard: FC<AboutCardProps> = ({ title, description }) => {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
      <h3 className="text-yellow-500 text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
};
