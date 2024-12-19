import React from 'react'
import InfoSection from "../../compoents/InfoSection/InfoSection"
import InfoSectionTop from "../../compoents/InfoSection/InfoSectionTop"
import InfoSectionBG from "../../compoents/InfoSection/InfoSectionBG"
import Pricing from '../../compoents/Pricing/Pricing';
import { homeObjOne1, homeObjOne2, homeObjOne3, homeObjOne4 } from "../Data";
import {InfoSecTopImg} from "../../compoents/InfoSection/InfoSection.element";
const Home = () => {
  return (
    <>
        <InfoSectionBG {...homeObjOne1} />
        <InfoSection {...homeObjOne2} />
        <InfoSectionTop {...homeObjOne3} />
        <InfoSection {...homeObjOne4} />
    </>
  );
}

export default Home