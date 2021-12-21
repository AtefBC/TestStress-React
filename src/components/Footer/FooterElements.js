import styled from "styled-components";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagramSquare } from "react-icons/fa";

export const FooterContainer = styled.div`
    padding-top: 150px;
    width: 75%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoWrapper = styled.div`
    flex: 0.25;
    height: 200px;
`;

export const LinksWrapper = styled.div`
    flex: 0.25;
    height: 200px;
`;

export const Infowrapper = styled.div`
    flex: 0.25;
    height: 200px;
`;

export const NetworkWrapper = styled.div`
    flex: 0.25;
    height: 200px;
`;

export const CopyContainer = styled.div`
    text-align: center;
`;

export const CopyText = styled.div`
    font-size: 12px;
    margin-bottom: 20px;
`;

export const LinkIcon = styled(IoIosArrowDroprightCircle)`
    font-size: 20px;
    color: #00a4ff;
`;

export const LinksTitle = styled.h4`
    
`;

export const LinkWrapper = styled.div`
    display: flex;
`;

export const LinkText = styled.h5`
    font-weight: 400;
    cursor: pointer;
    &:hover{
        color: #00a4ff;
    }
`;

export const Line = styled.div`
    height: 3px;
    width: 40px;
    background: #00a4ff;
    margin-bottom: 20px;
`;

export const Line2 = styled.div`
    height: 2px;
    width: 75%;
    background: #727272;
    margin-bottom: 20px;
    margin: auto;
`;

export const FBIcon = styled(FaFacebookF)`
    font-size: 40px;
    color: #414141;
    border: 3px solid #00a4ff;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    margin-right: 5px;
    &:hover{
        opacity: 0.8;
    }
`;

export const YTIcon = styled(FaYoutube)`
    font-size: 40px;
    color: #414141;
    border: 3px solid #00a4ff;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    margin-right: 5px;
    &:hover{
        opacity: 0.8;
    }
`;

export const INIcon = styled(FaInstagramSquare)`
   font-size: 40px;
    color: #414141;
    border: 3px solid #00a4ff;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    margin-right: 5px;
    &:hover{
        opacity: 0.8;
    }
`;

export const TWIcon = styled(FaTwitter)`
    font-size: 40px;
    color: #414141;
    border: 3px solid #00a4ff;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    margin-right: 5px;
    &:hover{
        opacity: 0.8;
    }
`;

export const LogoText = styled.p`
    font-size: 14px;
    color: #414141;
    margin-right: 50px;
`;

export const NavLogoName = styled.h1`
  font-size: 28px;
  color: #25eab3;
`;