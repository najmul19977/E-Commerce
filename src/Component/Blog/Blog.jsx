import React, { useEffect, useState } from "react";
import img from "../../assets/image/hero-image1.jpg";
import BlogCard from "../BlogCard/BlogCard";

const Blog = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const [blog,setBlog] = useState([]);

  useEffect(() =>{
    fetch('blog.json')
    .then((res) =>res.json())
    .then((data) => setBlog(data))

  },[])
  return (
    <div>
      <div style={backgroundStyle}>
        <h2  className="text-9xl font-bold text-center mx-auto">Blog Page</h2>
        
      </div>
      <div className="md:grid grid-cols-3 gap-5 mt-20">
        {
            blog.map((blogs) =><BlogCard
            key={blogs.id}
            blogs={blogs}
            ></BlogCard>)
        }
      </div>

    </div>
  );
};

export default Blog;
