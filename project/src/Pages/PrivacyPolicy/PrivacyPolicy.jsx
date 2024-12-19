import React from "react";
import InfoSection from "../../compoents/InfoSection/InfoSection";
import PrivacyPolicySection from "../../compoents/PrivacyPolicy/PrivacyPolicy";
import { provPolicy } from "../Data";

function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicySection{...provPolicy} />
    </>
  );
}

export default PrivacyPolicy;
