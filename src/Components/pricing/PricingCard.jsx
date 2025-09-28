import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;

  return (
    <div className="p-5 pb-7 border-2 rounded-tr-lg rounded-bl-lg bg-base-200">
      <div>
        <h2 className="text-4xl font-bold">{name}</h2>
        <h4 className="pt-2 text-xl">{price}</h4>
      </div>

      <div>
        <p className="py-4">{description}</p>
        <ol className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-3 text-accent"><CircleCheckBig /> {feature}</li>
          ))}
        </ol>
      </div>

        <div className="text-center mt-5">
          <button className="btn mx-auto w-full border-2 border-white rounded-tr-lg rounded-bl-lg">Subscribe</button>
        </div>
    </div>
  );
};

export default PricingCard;
