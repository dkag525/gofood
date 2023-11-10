import React from "react";
import Navbars from "../Navbars/Navbars";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Home() {
  return (
    <div>
      <div>
        <Navbars />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
