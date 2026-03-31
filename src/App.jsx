
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Stats from "./components/Stats/Stats"
import ProductCard from "./components/ProductCard/ProductCard"


function App() {
 

  return (
    <>
    <Navbar />
    <Banner />
    <Stats />
    <ProductCard />
    <ToastContainer />
    

   
      
    </>
  )
}

export default App
