import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";
const Step = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      img: userImg,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      img: packageImg,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      img: rocketImg,
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
          Get Started In 3 Steps
        </h2>

        <p className="text-gray-500 text-sm md:text-base mb-10 md:mb-14">
          Start using premium digital tools in minutes, not hours.
        </p>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm  hover:shadow-md hover:-translate-y-1 transition duration-300  h-full w-full max-w-sm mx-auto"
            >
              
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                {step.id}
              </span>

              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 hover:bg-purple-400 flex items-center justify-center rounded-full bg-purple-100">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Step;