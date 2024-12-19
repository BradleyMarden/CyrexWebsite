import React from "react";
import InfoSection from "../../compoents/InfoSection/InfoSection";
import PrivacyPolicySection from "../../compoents/PrivacyPolicy/PrivacyPolicy";
import { homeObjOne1, homeObjOne2, homeObjOne3, homeObjOne4 } from "../Data";

function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicySection{...homeObjOne3} />
      <InfoSection {...homeObjOne3} />
    </>
  );
}

export default PrivacyPolicy;
