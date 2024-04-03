import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="lg:text-7xl sm:text-6xl text-4xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-center max-w-4xl mt-10 text-lg text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex flex-row justify-center my-10 space-x-3">
        <a
          href="#"
          className="px-4 py-3 rounded-md bg-gradient-to-r from-orange-500 to-red-800 "
        >
          Start for free
        </a>
        <a href="#" className="px-4 py-3 mx-3 border rounded-lg">
          Documentation
        </a>
      </div>

      <div className="flex flex-row justify-center">
        <video
          autoPlay
          loop
          muted
          className="w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
