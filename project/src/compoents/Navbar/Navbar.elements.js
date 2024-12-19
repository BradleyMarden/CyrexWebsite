import styled from "styled-components"
import { Conatainer } from "../../GlobalStyles";
import {FaMagento} from "react-icons/fa"
import {Link} from "react-router-dom"
import img from './../../Pages/images/BG15.png';

export const Nav = styled.nav`
    background: #F97432;
    height: 80px;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0px 3px 5px #626262;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #ff7000;
    //background-image: url(${img});
`;

export const NavbarContainer = styled(Conatainer)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    flex-direction: row;
    align-items: center;
    ${Conatainer}
`
export const NavbarTitleCont = styled.div`
    font-size: 2.0rem;
    color: #dae4e8;
    font-weight: bolder;
    font-style: normal;
    flex-direction: row;
    display: grid;
    grid-auto-flow: column; /* Arrange items in a row */
    justify-content: start;
`;
export const NavbarTitle = styled.div`
    font-size: 2.0rem;
    color: #dae4e8;
    font-weight: bolder;
    font-style: normal;
    width: fit-content;
    padding-left: 0.1rem;
`;
export const NavbarTitlePre =  styled.div`
    font-size: 2.0rem;
    color: #dae4e8;
    font-weight: normal;
    font-style: normal;
    width: fit-content;
    
`
export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`

export const MobileIcon = styled.div`
    display: none;



    @media screen and (max-width:960px) {
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%) !important;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height:90vh;
      position: absolute;
      top:80px;
      left:${({click}) =>(click ? 0 : '-100%')};
      opacity:1;
      transition: all 0.5s ease-in-out;
      background: #101522;

  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width:960px){
      width:100%;

      &:hover {
          border:none;
      }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color:#4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border:none;
    outline: none;

`