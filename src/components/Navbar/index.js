import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  NavLogoName,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  HeaderAvatar,
  AvatarContainer,
  AvatarContent,
  AvatarProfil,
  AvatarLogout,
  ProfilIcon,
  LogoutIcon,
  ProfilText,
} from "./NavbarElements";

import LogoImg from "../../images/LOGO-DB.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function Navbar({ toggle }) {
  const user = useSelector(selectUser);

  const [scrollNav, setScrollNav] = useState(false);

  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show)
  };

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    window.onclick = function(event) {
      if(event.target.className != "MuiAvatar-img")
      {
        setShow(false);
      }
    }
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <Logo src={LogoImg}></Logo>
            <NavLogoName>DeepBreath</NavLogoName>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="doctors">Doctors</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="faq">FAQ</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/blogs">Blogs</NavLinks>
            </NavItem>
            <AvatarContainer>
              <HeaderAvatar onClick={showMenu} src={user.photo}></HeaderAvatar>
              <AvatarContent show={show}>
                <AvatarProfil to="/profil">
                  <ProfilIcon>+</ProfilIcon>
                  <ProfilText>Profil</ProfilText>
                </AvatarProfil>
                <AvatarLogout>
                  <LogoutIcon>+</LogoutIcon>
                  <ProfilText onClick={() => auth.signOut()}>
                    Log Out
                  </ProfilText>
                </AvatarLogout>
              </AvatarContent>
            </AvatarContainer>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
