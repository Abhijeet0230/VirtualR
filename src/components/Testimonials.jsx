import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div>
      <h1 className="mt-20  text-3xl sm:text-4xl lg:text-6xl text-center text-white">
        What People are saying
      </h1>

      <div className="mt-20 flex flex-wrap p-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
            <div className=" bg-neutral-900 p-6 border border-neutral-800 rounded-lg ">
              <p className="text-neutral-500">{testimonial.text}</p>
              <div className="flex mt-8 items-start space-x-4">
                <img
                  className="h-12 w-12 rounded-full border border-stone-50"
                  src={testimonial.image}
                />
                <div>
                  <h6 className="text-neutral-500">{testimonial.user}</h6>
                  <span className="text-sm  italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
