
const Pricing = () => {
  return (
    <div className="py-16 px-4 bg-gray-100">
      
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">

        
        <div className="bg-white p-6 text-black rounded-2xl shadow h-full flex flex-col">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="text-gray-500">Perfect for getting started</p>

          <h2 className="text-3xl font-bold mt-4">
            $0<span className="text-base font-normal">/Month</span>
          </h2>

          <ul className="mt-4 space-y-2 text-sm flex-1">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="btn mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none rounded-full">
            Get Started Free
          </button>
        </div>

        
        <div className="p-6 rounded-2xl shadow-lg text-white relative flex flex-col justify-between bg-gradient-to-r from-purple-600 to-indigo-600">

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <div>
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-gray-200">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-4">
              $29<span className="text-base font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>
          </div>

          <button className="btn mt-6 bg-white text-purple-600 border-none rounded-full">
            Start Pro Trial
          </button>
        </div>

        
        <div className="bg-white text-black p-6 rounded-2xl shadow h-full flex flex-col">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="text-gray-500">For teams and businesses</p>

          <h2 className="text-3xl font-bold mt-4">
            $99<span className="text-base font-normal">/Month</span>
          </h2>

          <ul className="mt-4 space-y-2 text-sm flex-1">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="btn mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none rounded-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;