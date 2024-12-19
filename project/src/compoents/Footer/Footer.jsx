import React from "react";
import { Button } from "../../GlobalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubcription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
import {NavbarTitle, NavbarTitleCont, NavbarTitlePre} from "../Navbar/Navbar.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubcription>
        <FooterSubHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </FooterSubHeading>
        <FooterSubText>Lorem ipsum dolor sit amet, consectetu</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubcription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle>About Us</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Contacts Us</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Videos</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Social Media</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <NavbarTitleCont>
            <NavbarTitlePre to="/">
              Cyrex
            </NavbarTitlePre>
            <NavbarTitle to="/">
              Studios
            </NavbarTitle>
          </NavbarTitleCont>
          <WebsiteRights>cyrexstudios © 2024</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                "//www.youtube.com/channel/UCsDud-L3L3rQiJBPnPEZj9w?view_as=subscriber"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
