import React from "react";
import Navbar from "./components/navbar";
import Herosection  from "./components/herosection";
import BoookingSection from "./components/bookingsection";
import MenuSection from "./components/menusection";
import Offer from "./components/offer";
import TableSection from "./components/tablesection";
import Banner from "./components/banner";
import Services from "./components/service";
import Footer from "./components/footer";
function App() {

  return (
    <div className='bg-gallery min-h-screen'>
  
        
      <Herosection/>
      <BoookingSection/>
      <MenuSection/>
      <Offer/>
      <TableSection/>
      <Banner/>
      <Services/>
    </div>
    
  ) ;
}

export default App
