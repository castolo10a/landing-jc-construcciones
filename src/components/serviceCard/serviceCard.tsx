"use client";

import { FC } from "react";
import { ServiceCardProps } from "./serviceCard.types";

export const ServiceCard: FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-zinc-800 justify-items-center text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all">
      <Icon size={32} className="text-yellow-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};
