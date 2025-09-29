import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingOpt = ({pricingPromise}) => {

  const pricingData = use(pricingPromise)

  return (
    <>
      <div className="my-5 md:my-12">
        <h1 className="title">Our Pricing</h1>
        
        <div className="grid grid-cols-1 gap-7 py-7 md:grid-cols-2 xl:grid-cols-3">
          {
            pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
          }
        </div>
      </div>
    </>
  );
};

export default PricingOpt;
