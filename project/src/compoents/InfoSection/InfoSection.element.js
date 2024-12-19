import styled from "styled-components";
import img from './../../Pages/images/BG10.png';
import img2 from './../../Pages/images/lowpoly.png';
export const InfoSecTop = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#f7a721' : '#ffc122')};
    box-shadow: 0px 0px 10px #2f2e2e;
    position: relative;
`;
export const InfoSecTopImg = styled.div`
    
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#f7a721' : '#dae4e8')};
    box-shadow: 0px 0px 10px #2f2e2e;
    position: relative;
    background-image: url(${img});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #f7a721;
`;
export const InfoSecTopImg2 = styled.div`
    
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#f7a721' : '#dae4e8')};
    box-shadow: 0px 0px 10px #2f2e2e;
    position: relative;
    background-image: url(${img2});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #f7a721;
`;
export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#fefae2' :'#dae4e8' )};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap-reverse;
  align-items: center;
  flex-direction: ${({imgStart}) =>(imgStart ? 'row-reverse' : 'row')};
`;
export const InfoRowPolicy = styled.div`
`;
export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex:1;
    max-width: 50%;
    flex-basis:50%;

    @media screen and (max-width:768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:60px;

    @media screen and (max-width:768px){
        padding-bottom: 65px;
    }
`;
export const TextWrapperPrivacy = styled.div`
    padding-top: 0;
    padding-bottom:60px;
    text-align: center;
    @media screen and (max-width:768px){
        padding-bottom: 65px;
    }
`;
//26313b
export const TopLine = styled.div`
    color: ${({lightTopLine})=>(lightTopLine ? "#4e5860":"#26313b")};
    font-size:18px;
    line-height: 16px;
    letter-spacing:1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size:40px;
    line-height: 1.1;
    color:${({lightText})=>(lightText ? '#26313b' : '#26313b')};


`;
export const HeadingPrivacy = styled.h1`
    margin-bottom: 24px;
    font-size:40px;
    line-height: 1.1;
    color:${({lightText})=>(lightText ? '#26313b' : '#26313b')};
    text-align: center;
`;

export const SubHeadingPrivacy = styled.h1`
    margin-bottom: 24px;
    font-size:22px;
    line-height: 1.1;
    color:${({lightText})=>(lightText ? '#26313b' : '#26313b')};
    text-align: center;
`;
export const SubtitlePrivacy = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#4e5860":"#26313b")};
    text-align: center;
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#4e5860":"#26313b")};
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start})=>(start ? 'flex-start' : 'flex-end')};
`;
export const Img = styled.img`
    padding-right:0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;

`