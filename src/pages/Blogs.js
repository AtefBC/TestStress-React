import React from "react";
import styled from "styled-components";
import DoctorsHeader from "../components/DoctorsPage";
import NewsDrawer from "../components/NewsDrawer";
import BlogsSection from "../components/BlogsPage";
import { homeObjBlogs } from "../components/DoctorsPage/Data";
import Footer from "../components/Footer";

function Blogs() {
  return (
    <>
      <DoctorsHeader {...homeObjBlogs}/>
      <BlogsContainer>
        <BlogsSection />
        <NewsDrawer />
      </BlogsContainer>
      <Footer />
    </>
  );
}

export default Blogs;

const BlogsContainer = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

