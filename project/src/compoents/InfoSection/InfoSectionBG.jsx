import React from 'react'
import { Conatainer,Button } from '../../GlobalStyles';
import {Link} from 'react-router-dom'
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img, InfoSecTop, InfoSecTopImg,
} from "./InfoSection.element";
const InfoSectionBG = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  topLine,
  headline,
  description,
  start,
  img,
  alt, 
  useBG
    
}) => {
  return (
    <>
      <InfoSecTopImg lightBg={lightBg}>
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
      </InfoSecTopImg>
    </>
  );
};

export default InfoSectionBG