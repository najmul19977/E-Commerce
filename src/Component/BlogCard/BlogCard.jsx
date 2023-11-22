import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  const { id, image, author, date, title, content } = blogs;
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <div>
          <p className="text-xl font-serif font-bold text-left mt-5">{title}</p>
          <div className="flex gap-5 font-bold">
            <p>{date}</p>
            <p>{author}</p>
          </div>
          <button className="btn btn-outline-info font-serif text-lime-600 me-0 text-left">
            <Link to={`/news/${id}`}>
              News Details <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
