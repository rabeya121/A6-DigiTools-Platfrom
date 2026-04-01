const WorkFlow = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4 text-center">

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Ready To Transform Your Workflow?
      </h2>

      
      <p className="text-lg text-gray-200 mb-8">
        Join thousands of professionals who are already using Digitools to work smarter. <br />
        Start your free trial today.
      </p>

     
      <div className="flex justify-center gap-4 mb-6">

      
        <button className="btn bg-white text-purple-600 border-none rounded-full hover:bg-gray-400">
          Explore Products
        </button>

        <button className="btn btn-outline border-white text-white rounded-full hover:bg-white hover:text-purple-600">
          View Pricing
        </button>

      </div>

      <p className="text-sm text-gray-200">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default WorkFlow;