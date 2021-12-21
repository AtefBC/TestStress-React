import React, { useState } from "react";
import {
  TestContainer,
  TestH1,
  TestP
} from "./TestElements";
import { ButtonContainer } from "../../components/TestSection/TestElements";
import {
  ArrowForward,
  ArrowRight,
} from "../HeroSection/HeroElements";

function TestSection({setVisible, visible}) {
  const onVisible = () => {
    setVisible(!visible);
  };
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <TestContainer>
        <TestH1>
          Complete this simple stress test to measure the stress in your life.
        </TestH1>
        <TestP>
          This stress test uses the Perceived Stress Scale (PSS). It forms part
          of a wider-ranging self-assessment undertaken by participants of the
          Be Mindful course.
        </TestP>
        <ButtonContainer>
        <button
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          onClick={onVisible}
        >
          Get Your Stress Score
          {hover ? (
            <ArrowForward fontBigg="true" />
          ) : (
            <ArrowRight fontBigg="true" />
          )}
        </button>
      </ButtonContainer>
        <TestH1>How this Stress Test works</TestH1>
        <TestP>
          This stress test uses the Perceived Stress Scale (PSS). Originally
          created by Cohen et al (1983), it is a highly recognised psychological
          tool for measuring the perception of stress that's clinically
          validated and widely used by the NHS and other reputable medical
          services. It forms part of a wider-ranging self-assessment undertaken
          by participants of the Be Mindful course, which also includes tests
          for Depression (PHQ9) and Anxiety (GAD7).
        </TestP>
        <TestP>
          The Perceived Stress Scale (PSS) measures the degree to which
          situations in your life are perceived as stressful. The series of
          questions have been designed to assess how unpredictable,
          uncontrollable, and overloaded you feel your life to be, as well as a
          direct questione about your current level of experienced stress.
        </TestP>
        <TestP>
          The PSS questions ask about thoughts and feelings during the last
          month. They are easy to understand and are of a general nature. This
          makes the test relatively free from bias for or against any specific
          subpopulation group.
        </TestP>
    </TestContainer>
  );
}

export default TestSection;
