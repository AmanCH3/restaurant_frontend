import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const Aboutus = () => {
  return (
    <div className="max-w-full">
      <div className="pb-1">
        <NavBar />
      </div>
      <div className="pt-20">
        <div className="bg-gallery">
          {/* About Us Section */}
          <div>
            <img src="/assets/aboutus/Aboutus.png" alt="Logo of the restaurant" />
          </div>
          <div className="flex items-center justify-center m-20">
            <p className="text-center tracking-wide">
              Our restaurant is a celebration of culinary traditions, offering a rich tapestry of aromatic spices and
              authentic dishes that transport you to the streets of Kathmandu and the bustling markets of Mumbai. From
              mouthwatering curries to savory tandoori delights, each dish is meticulously crafted to tantalize your
              taste buds and evoke the essence of South Asian gastronomy. At Spices, we invite you to embark on a
              culinary journey that honors tradition while embracing innovation, all within the welcoming ambiance of
              our restaurant.
            </p>
          </div>

          {/* Team Section */}
          <div className="flex justify-center pt-10">
            <h1 className="font-semibold text-2xl">The Team of The Spices</h1>
          </div>
          <div className="bg-gallery flex flex-row m-20 gap-10 pb-20">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center space-y-3">
              <img src="/assets/aboutus/person1.png" alt="lady" />
              <h1 className="font-semibold">Shobha Sharma (President)</h1>
              <p className="text-center">
                Greetings, I'm Shobha Sharma, acting on behalf of the restaurant. You can reach me at (920) 917-9987. We
                appreciate your patronage.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center space-y-3 bg-gallery">
              <img src="/assets/aboutus/person2.png" alt="photo of CEO" />
              <h1 className="font-semibold">Basudev Adhikari (C.E.O)</h1>
              <p className="text-center">
                I'm Basudev Adhikari, acting on behalf of the CEO of this restaurant. You can reach me via email at
                missionbda@gmail.com or by phone at (920) 226-1786.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="pt-20 bg-gallery">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
