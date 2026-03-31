import { useState } from "react"; 
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Stats from "./components/Stats/Stats"
// import ProductCard from "./components/ProductCard/ProductCard"
import Products from "./components/ProductCard/Products"
import Step from "./components/Step/Step";
import Pricing from "./components/Pricing/Pricing";
import WorkFlow from "./components/WorkFlow/WorkFlow";
import Footer from "./components/Footer/footer";



function App() {
  const [cartItems, setCartItems] = useState([]); // ✅ NEW


  return (
    <>
    <Navbar cartItems={cartItems} />
    <Banner />
    <Stats />
    <Products cartItems={cartItems} 
        setCartItems={setCartItems} 
    />
    <Step />
    <Pricing />
    <WorkFlow />
    <Footer />
    {/* <ProductCard /> */}
    <ToastContainer />
    

   
      
    </>
  )
}

export default App
