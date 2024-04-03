import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div>
      <h1 className="text-center mt-20 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
        FEATURE
      </h1>
      <h1 className="text-center mt-20 lg:text-7xl sm:text-6xl text-4xl ">
        Easily build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          your code
        </span>
      </h1>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center  items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
