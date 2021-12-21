import React from "react";
import {
  FooterContainer,
  LogoWrapper,
  LinksWrapper,
  Infowrapper,
  NetworkWrapper,
  CopyContainer,
    CopyText,
    LinkWrapper,
    LinkIcon,
    FBIcon,
    YTIcon,
    INIcon,
    TWIcon,
    LinkText,
    LinksTitle,
    Line,
    Line2,
    LogoText,
    NavLogoName
} from "./FooterElements";
import LogoImg from "../../images/LOGO-DB.svg";
import {
  NavLogo,
  Logo
} from "../Navbar/NavbarElements";

function Footer() {
  return (
    <>
      <FooterContainer>
        <LogoWrapper>
          <NavLogo to="/">
            <Logo src={LogoImg}></Logo>
                      <NavLogoName>DeepBreath</NavLogoName>
                  </NavLogo>
                  <LogoText>
                  We take our mission of decreasing mental illness seriously. We connect people to the best doctors from around the world.
                  </LogoText>
        </LogoWrapper>
        <LinksWrapper>
                  <LinksTitle>Useful Links</LinksTitle>
                  <Line />
                  <LinkWrapper>
                      <LinkIcon />
                      <LinkText>About us</LinkText>
                  </LinkWrapper>
                  <LinkWrapper>
                      <LinkIcon />
                      <LinkText>Doctors</LinkText>
                  </LinkWrapper>
                  <LinkWrapper>
                      <LinkIcon />
                      <LinkText>Stress Test</LinkText>
                  </LinkWrapper>
                  <LinkWrapper>
                      <LinkIcon />
                      <LinkText>Blogs</LinkText>
                  </LinkWrapper>
        </LinksWrapper>
        <Infowrapper>
                  <LinksTitle>Account Info</LinksTitle>
                  <Line />
                  <LinkWrapper>
                      <LinkIcon />
                      <LinkText>Contact us</LinkText>
                  </LinkWrapper>
                  <LinkWrapper>
                      <LinkIcon />
                      <LinkText>Setting Account</LinkText>
                  </LinkWrapper>
                  <LinkWrapper>
                      <LinkIcon />
                      <LinkText>Events</LinkText>
                  </LinkWrapper>
                  <LinkWrapper>
                      <LinkIcon />
                      <LinkText>Videos</LinkText>
                  </LinkWrapper>
        </Infowrapper>
        <NetworkWrapper>
                  <LinksTitle>Social Network</LinksTitle>
                  <Line />
                  <LinkWrapper>
                      <FBIcon />
                      <YTIcon />
                      <INIcon />
                      <TWIcon />
                  </LinkWrapper>
        </NetworkWrapper>
      </FooterContainer>
          <CopyContainer>
          <Line2 />
        <CopyText>&copy; 2021 DeepBreath All Rights reserved.</CopyText>
      </CopyContainer>
    </>
  );
}

export default Footer;
