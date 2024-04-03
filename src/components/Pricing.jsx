import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";
const Pricing = () => {
  return (
    <div>
      <h1 className="text-center lg:text-7xl md:text-5xl text-4xl lg:mt-20 mt-10">
        Pricing
      </h1>

      <div className="flex flex-wrap mt-20 justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 ">
            <div className="p-10 border border-neutral-400 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-4xl">{option.price}</span>
                <span className="text-sm text-neutral-500">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className=" inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
