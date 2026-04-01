import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-6">
          
      
          <div className="max-w-[300px]">
            <h2 className="text-3xl font-bold text-white mb-4">
              DigiTools
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div >
            <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-1.5 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

  
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-1.5 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          
          <div >
            <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-1.5 text-sm">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          
          <div >
            <h4 className="text-white font-semibold mb-3 text-sm">Social Links</h4>
            <div className="flex space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-white cursor-pointer">
                <FaYoutube />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-white cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-white cursor-pointer">
                <FaTwitter />
              </div>
            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
