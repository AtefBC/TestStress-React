import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import { Button } from "../ButtonElements";
import {
  LoginContainer,
  LoginLogoWrapper,
  LoginLogo,
  LoginName,
} from "./LoginElements";
import LogoImage from "../../images/LOGO-DB.svg";
import { HeroBtnWrapper, ArrowForward, ArrowRight } from "../HeroSection/HeroElements";

function Login() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginLogoWrapper>
        <LoginLogo src={LogoImage} />
        <LoginName>DeepBreath</LoginName>
      </LoginLogoWrapper>
      <HeroBtnWrapper>
        <Button
          onClick={signIn}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Sign In {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
    </LoginContainer>
  );
}

export default Login;
