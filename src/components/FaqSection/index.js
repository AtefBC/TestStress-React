import React, { useState }from "react";
import {
  DoctorsTitle,
  DoctorsDot,
  DoctorsH2,
  DoctorsH1,
} from "../DoctorsSection/DoctorsElements";
import {
  FaqContainer,
  FaqWrapper,
  FaqQWrapper,
  FaqQ,
  FaqA,
} from "../FaqSection/FaqElements";
import { Button } from "../ButtonElements";
import { HeroBtnWrapper, ArrowForward, ArrowRight } from "../HeroSection/HeroElements";

function FaqSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <FaqContainer>
      <DoctorsTitle>
        <DoctorsDot />
        <DoctorsDot />
        <DoctorsH2>DeepBreath FAQ</DoctorsH2>
        <DoctorsDot />
        <DoctorsDot />
      </DoctorsTitle>
      <DoctorsH1>
        <span>Frequently</span> Ask & Questions.
      </DoctorsH1>
      <FaqWrapper>
        <FaqQWrapper>
          <FaqQ>How to Choose the Right Therapist for You ?</FaqQ>
          <FaqA>
          It’s important to find a good therapist with whom you feel comfortable.
          So you want to work with someone who you will open up to—not to mention listen to.
          <br/>But there are so many options and choices out there that choosing a therapist can feel overwhelming.
          </FaqA>
        </FaqQWrapper>
        <FaqQWrapper>
          <FaqQ>What to Expect During Your First Appointment</FaqQ>
          <FaqA>
          During an initial session, your therapist will likely explain how therapy works, provide you with information on confidentiality, and ask you to sign some forms. The therapist may ask questions about your childhood, your medical history, your family, and any history of past mental health treatment.
          </FaqA>
        </FaqQWrapper>
        <FaqQWrapper>
          <FaqQ>Is stress linked to anxiety and panic attacks?</FaqQ>
          <FaqA>
          Most people experience feelings of anxiety and panic at some time as a response to a stressful situation. Anxiety is a feeling of unease, which could be due to being worried, tense or afraid about certain things that are about to happen or a situation. Panic attacks can happen as a result of severe anxiety and can come on very quickly. Some symptoms include a racing heart, feeling faint, sweating, nausea, chest pain and a shortness of breath.
          </FaqA>
        </FaqQWrapper>
        <FaqQWrapper>
          <FaqQ>What are the main causes of stress?</FaqQ>
          <FaqA>
          There are many situations that can cause stress, and sometimes there may not be an obvious cause. Some of the common triggers for stress include work or education demands, financial matters, personal life events or changes; such as illness or injury, bereavement, and organising a large or complicated event, and friends and family situations; such as a relationship break-up or divorce or being a carer.
          </FaqA>
        </FaqQWrapper>
      </FaqWrapper>
      <HeroBtnWrapper>
          <Button
            to=""
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            darkBottom
          >
            Make a  Question {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
    </FaqContainer>
  );
}

export default FaqSection;
