import React, { useState } from "react";
import {
  NewsDrawerContainer,
  NewsDrawerCourse,
  NewsDrawerH4,
  NewsDrawerCourseImg,
  NewsDrawerCourseInfo,
  NewsDrawerNews,
  NewsDrawerWrapper,
  NewsDrawerWrap,
  NewsDrawerWrapImg,
  NewsDrawerCourseTitle,
  NewsDrawerWrapInfo,
  NewsDrawerWrapDate,
  NewsDrawerWrapTitle,
  NewsDrawerWrapDate2,
  NewsDrawerWrapDay,
  NewsDrawerWrapYear,
  PlayIcon,
} from "./NewsDrawerElements";

import NewsDrawerCourseImage from "../../images/NewsImage.jpg";
import NewsDrawerWrapImage from "../../images/News1Image.jpg";

import { Button } from "../ButtonElements";
import {
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "../HeroSection/HeroElements";

function NewsDawer() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <NewsDrawerContainer>
      <NewsDrawerNews>
        <NewsDrawerH4>
          <span>Upcoming</span> Events.
        </NewsDrawerH4>
        <NewsDrawerWrapper>
          <NewsDrawerWrap>
            <NewsDrawerWrapDate2>
              <NewsDrawerWrapDay>27</NewsDrawerWrapDay>
              <NewsDrawerWrapYear>May 2021</NewsDrawerWrapYear>
            </NewsDrawerWrapDate2>
            <NewsDrawerWrapInfo>
              <NewsDrawerWrapTitle
                href="https://waset.org/child-and-adolescent-psychiatry-conference-in-may-2021-in-tokyo"
                target="_blank"
              >
                ICCAP 2021: Child and Adolescent Psychiatry Conference
              </NewsDrawerWrapTitle>
              <NewsDrawerWrapDate>Tokyo</NewsDrawerWrapDate>
            </NewsDrawerWrapInfo>
          </NewsDrawerWrap>
          <NewsDrawerWrap>
            <NewsDrawerWrapDate2>
              <NewsDrawerWrapDay>03</NewsDrawerWrapDay>
              <NewsDrawerWrapYear>June 2021</NewsDrawerWrapYear>
            </NewsDrawerWrapDate2>
            <NewsDrawerWrapInfo>
              <NewsDrawerWrapTitle
                href="https://waset.org/abnormal-and-developmental-psychology-conference-in-june-2021-in-rome"
                target="_blank"
              >
                ICADP 2021: Abnormal and Developmental Psychology Conference,
              </NewsDrawerWrapTitle>
              <NewsDrawerWrapDate>Rome</NewsDrawerWrapDate>
            </NewsDrawerWrapInfo>
          </NewsDrawerWrap>
          <NewsDrawerWrap>
            <NewsDrawerWrapDate2>
              <NewsDrawerWrapDay>03</NewsDrawerWrapDay>
              <NewsDrawerWrapYear>June 2018</NewsDrawerWrapYear>
            </NewsDrawerWrapDate2>
            <NewsDrawerWrapInfo>
              <NewsDrawerWrapTitle
                href="https://waset.org/behaviorism-and-psychology-conference-in-june-2021-in-new-york"
                target="_blank"
              >
                ICBP 2021: Behaviorism and Psychology Conference
              </NewsDrawerWrapTitle>
              <NewsDrawerWrapDate>New York</NewsDrawerWrapDate>
            </NewsDrawerWrapInfo>
          </NewsDrawerWrap>
        </NewsDrawerWrapper>
        <HeroBtnWrapper>
          <Button
            to="/events"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            fontBig="true"
            big="true"
          >
            View All Events {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </NewsDrawerNews>
      <NewsDrawerNews>
        <NewsDrawerH4>
          <span>Lastest</span> News.
        </NewsDrawerH4>
        <NewsDrawerWrapper>
          <NewsDrawerWrap>
            <NewsDrawerWrapImg
              src={
                "https://www.usnews.com/dims4/USNEWS/1633175/2147483647/resize/300x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F79%2F22369aabdd75a0f3c9f1be5bc0dc04%2FHD2652962035image.jpg"
              }
            />
            <NewsDrawerWrapInfo>
              <NewsDrawerWrapDate>26 May 2021</NewsDrawerWrapDate>
              <NewsDrawerWrapTitle>
                Online Therapy Works for Kids Battling Social Anxiety
              </NewsDrawerWrapTitle>
            </NewsDrawerWrapInfo>
          </NewsDrawerWrap>
          <NewsDrawerWrap>
            <NewsDrawerWrapImg
              src={
                "https://www.usnews.com/dims4/USNEWS/158233c/2147483647/resize/300x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F53%2F06992313023091fd2d5a6b72e707f9%2FHD2652948216image.jpg"
              }
            />
            <NewsDrawerWrapInfo>
              <NewsDrawerWrapDate>26 May 2021</NewsDrawerWrapDate>
              <NewsDrawerWrapTitle>
                Depression Even More Common With Heart Failure Than Cancer
              </NewsDrawerWrapTitle>
            </NewsDrawerWrapInfo>
          </NewsDrawerWrap>
          <NewsDrawerWrap>
            <NewsDrawerWrapImg
              src={
                "https://www.usnews.com/dims4/USNEWS/4a0bb0f/2147483647/crop/2121x1414%2B0%2B0/resize/300x300%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd8%2F99%2F4e4bc23e442aad1349fa924cf015%2F210505-bipolardisorder-stock.jpg"
              }
            />
            <NewsDrawerWrapInfo>
              <NewsDrawerWrapDate>26 May 2021</NewsDrawerWrapDate>
              <NewsDrawerWrapTitle>
                Recovery From Bipolar Disorder
              </NewsDrawerWrapTitle>
            </NewsDrawerWrapInfo>
          </NewsDrawerWrap>
        </NewsDrawerWrapper>
        <HeroBtnWrapper>
          <Button
            to="/news"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            fontBig="true"
            big="true"
          >
            View All News {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </NewsDrawerNews>
      <NewsDrawerCourse>
        <NewsDrawerH4>
          <span>Lastest</span> Video.
        </NewsDrawerH4>
        <NewsDrawerCourseImg
          src={
            "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/f484ac0d-69c5-4b99-af17-e5ce71baf5b2/DanielLevitin_2015G-embed.jpg?c=1050%2C550&w=1050"
          }
        />
        <a href="https://www.youtube.com/watch?v=8jPQjjsBbIc" target="_blank">
          <PlayIcon href="https://www.youtube.com/watch?v=8jPQjjsBbIc" />
        </a>
        <NewsDrawerCourseTitle>
          How to stay calm when you know you'll be stressed | Daniel Levitin
        </NewsDrawerCourseTitle>
        <NewsDrawerCourseInfo>
          Neuroscientist Daniel Levitin thinks there's a way to avoid making
          critical mistakes in stressful situations, when your thinking becomes
          clouded — the pre-mortem. "We all are going to fail now and then," he
          says. "The idea is to think ahead to what those failures might be."
        </NewsDrawerCourseInfo>
        <HeroBtnWrapper>
          <Button
            to="/videos"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            fontBig="true"
            big="true"
          >
            All Videos {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </NewsDrawerCourse>
    </NewsDrawerContainer>
  );
}

export default NewsDawer;
