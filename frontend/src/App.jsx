import React from "react";
import Navbar from "./components/navbar";
import Herosection  from "./components/herosection";
import BoookingSection from "./components/bookingsection";
import MenuSection from "./components/menusection";
function App() {

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <Herosection/>
      <BoookingSection/>
      <MenuSection/>

    </div>
    
  ) ;
}

export default App
