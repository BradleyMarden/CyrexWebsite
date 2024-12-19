import React from "react";
import {Button, Conatainer} from "../../GlobalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

import {Link} from "react-router-dom";
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img, InfoSecTop, TextWrapperPrivacy, HeadingPrivacy, InfoRowPolicy, SubtitlePrivacy, SubHeadingPrivacy,
} from "./../InfoSection/InfoSection.element";

const PrivacyPolicySection = ({
                   primary,
                   lightBg,
                   imgStart,
                   lightTopLine,
                   lightText,
                   lightTextDesc,
                   buttonLabel,
                   topLine,
                   headline,
                   description1,
                    description2,
                    description3,
                    description4,
                    description5,
                    description6,
                    description7,
                    description8,
                    description9,
                    description10,
                   start,
                   img,
                   alt,
                   size
                 }) =>  {
  return (
      <InfoSec lightBg={lightBg}>
        <Conatainer>
          <InfoRowPolicy imgStart={imgStart}>
              <TextWrapperPrivacy>
                <HeadingPrivacy lightText={lightText}>{headline}</HeadingPrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Cyrex Studios</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description1}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Information Collection and Use</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description2}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Third Party Access</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description3}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Opt-Out Rights</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description4}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Data Retention Policy</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description5}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Children</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description6}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Security</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description7}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Changes</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description8}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Your Consent</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description9}</SubtitlePrivacy>
                  <SubHeadingPrivacy lightTextDesc={lightTextDesc}>Contact Us</SubHeadingPrivacy>
                  <SubtitlePrivacy lightTextDesc={lightTextDesc}>{description10}</SubtitlePrivacy>
              </TextWrapperPrivacy>
          </InfoRowPolicy>
        </Conatainer>
      </InfoSec>
  );
}
export default PrivacyPolicySection;
