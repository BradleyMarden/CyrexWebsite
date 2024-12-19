import React from "react";
import {Button, Conatainer} from "../../GlobalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  Heading, Img,
  ImgWrapper,
  InfoColumn,
  InfoRow, InfoSec,
  Subtitle,
  TextWrapper,
  TopLine
} from "../InfoSection/InfoSection.element";
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
  Img, InfoSecTop,
} from "./InfoSection.element";

function Pricing() {
  return (
      <InfoSec lightBg={lightBg}>
        <Conatainer>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt}/>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Conatainer>
      </InfoSec>
  );
}
export default Pricing;
