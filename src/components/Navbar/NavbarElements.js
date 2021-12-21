import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { Avatar } from "@material-ui/core";
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "#2d2d2d" : "tranparent")}; */
  background: ${({ scrollNav }) => (scrollNav ? "rgba(0,0,0,0.5)" : "transparent")};
  backdrop-filter: ${({ scrollNav }) => (scrollNav ? "blur(8px)" : "transparent")};
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 75%;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  width: 300px;

  color: #ffffff;
  &:hover {
    color: #25eab3;
    opacity: 0.8;
    /* background-image: linear-gradient(to right, #00a4ff, #25eab3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`;

export const Logo = styled.img`
  height: 35px;
`;

export const NavLogoName = styled.h1`
  font-size: 28px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: -13px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;
    &:hover {
      color: #25eab3;
      opacity: 0.8;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: -22px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 35px;
`;

export const NavLinks = styled(LinkR)`
  font-size: 15px;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 1px solid #25eab3;
  }
  &:hover {
    background-image: linear-gradient(to bottom left, #25eab3, #00a4ff);
    border-radius: 10px;
  }
`;


export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-left: 1rem;
  :hover {
    opacity: 0.8;
  }
`;


export const AvatarContainer = styled.div`
  position: relative;
`;

export const AvatarContent = styled.div`
  /* background-image: linear-gradient(to bottom left, #25eab3, #00a4ff); */
  background: rgba(13,108,168,0.5);
  backdrop-filter: "blur(8px)";
  position: absolute;
  border-radius:7px;
  width: 120px;
  margin-top: 12px;
  right: 0;
  padding-left: 5px;
  padding-right: 5px;
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const AvatarProfil = styled(LinkR)`
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: left;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #25eab3;
  }
`;

export const AvatarLogout = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: left;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #25eab3;
  }
  border-top: 2px solid #ffffff;
`;

export const ProfilIcon = styled(CgProfile)`
  font-size: 25px;
`;

export const LogoutIcon = styled(FiLogOut)`
  font-size: 25px;
`;

export const ProfilText = styled.p`
  margin-left: 10px;
`;



