import React from "react";
import Navbar from "./components/navbar";
import Herosection  from "./components/herosection";
import BoookingSection from "./components/bookingsection";
import MenuSection from "./components/menusection";
import Offer from "./components/offer";
function App() {

  return (
    <div className='bg-white min-h-screen'>
  
        
      <Navbar />
      <Herosection/>
      <BoookingSection/>
      <MenuSection/>
      <Offer/>
       </div>
    
  ) ;
}

export default App
