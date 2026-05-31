import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./stats";
import Pricing from "./pricing";
import Education from "./Education";

import OpenAccount from "../../OpenAcoout";

const Homepage=()=>{
    return(
        <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
        </>
    );
}

export default Homepage;