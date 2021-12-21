import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon >
        <CloseIcon onClick={toggle} />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
        <SideBarLink to="about" onClick={toggle}>About Us</SideBarLink>
        <SideBarLink to="doctors" onClick={toggle}>Doctors</SideBarLink>
        <SideBarLink to="faq" onClick={toggle}>FAQ</SideBarLink>
        <SideBarLink to="contact" onClick={toggle}>Contact Us</SideBarLink>
        <SideBarLink to="signin" onClick={toggle}>Sign In</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to='/signup'>Sign Up</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
