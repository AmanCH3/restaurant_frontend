import React from "react";
import Navbar from "./components/navbar";
import Herosection  from "./components/herosection";
import BoookingSection from "./components/bookingsection";
import MenuSection from "./components/menusection";
import Offer from "./components/offer";
import TableSection from "./components/tablesection";
import Banner from "./components/banner";
function App() {

  return (
    <div className='bg-white min-h-screen'>
  
        
      <Navbar />
      <Herosection/>
      <BoookingSection/>
      <MenuSection/>
      <Offer/>
      <TableSection/>
      <Banner/>
       </div>
    
  ) ;
}

export default App
