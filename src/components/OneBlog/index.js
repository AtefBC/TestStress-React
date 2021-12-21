import React, { useState } from "react";
import { homeObjBlog } from "../DoctorsPage/Data";
import DoctorsHeader from "../DoctorsPage";
import BlogsData from "../BlogsPage/Blogs.json";
import NewsDrawer from "../NewsDrawer";

import {
  BlogContainer,
  BlogWrapper,
  BlogImg,
  BlogDate,
  BlogSource,
  BlogTitle,
  BlogContent,
  DoctorsContainer,
  BlogDateSource,
  BlogDateWrapper,
  Calender,
  Person
} from "./OneBlogElements";

function OneBlog() {
  const [index, setindex] = useState(
    window.location.pathname.substring(7, window.location.pathname.length)
  );
  return (
    <>
      <DoctorsHeader {...homeObjBlog} />
      <DoctorsContainer>
        <BlogContainer>
          <BlogImg src={BlogsData[index - 1].img} />
          <BlogDateSource>
            <BlogDateWrapper>
              <Calender />
              <BlogDate>{BlogsData[index - 1].date}</BlogDate>
            </BlogDateWrapper>
            <BlogDateWrapper>
              <Person />
              <BlogSource>{BlogsData[index - 1].source}</BlogSource>
            </BlogDateWrapper>
          </BlogDateSource>
          <BlogTitle>{BlogsData[index - 1].title}</BlogTitle>
          <BlogContent>{BlogsData[index - 1].content}</BlogContent>
        </BlogContainer>
        <NewsDrawer />
      </DoctorsContainer>
    </>
  );
}

export default OneBlog;
