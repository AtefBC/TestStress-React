import React, { useState } from "react";
import BlogsData from "../BlogsPage/Blogs.json";
import {
  BlogsContainer,
  BlogWrapper,
  BlogImg,
  BlogDate,
  BlogSource,
  BlogTitle,
  BlogContent,
} from "./BlogsElements";
import { Button } from "../ButtonElements";
import {
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "../HeroSection/HeroElements";

function BlogsSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <BlogsContainer>
      {BlogsData.map((blogDetail, index) => {
        return (
          <BlogWrapper>
            <BlogImg src={blogDetail.img} />
            <BlogDate>{blogDetail.date}</BlogDate>
            <BlogTitle>{blogDetail.title}</BlogTitle>
            <BlogContent>{blogDetail.content.substring(0,150)}...</BlogContent>
            <HeroBtnWrapper>
              <Button
                to={"/blogs/"+blogDetail.id}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                fontBig="true"
                big="true"
              >
                Read More {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
          </BlogWrapper>
        );
      })}
    </BlogsContainer>
  );
}

export default BlogsSection;
