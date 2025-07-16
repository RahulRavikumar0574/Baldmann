// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'; // Import the CSS file for styling

const BlogCard = ({ blog }) => (
  <div className="blog-card">
    <img src={blog.image} alt={blog.title} className="blog-card-image" />
    <div className="blog-card-content">
      <h3 className="blog-card-title">{blog.title}</h3>
      <p className="blog-card-author">By {blog.author}</p>
      <Link to={`/blog/${blog._id}`} className="read-more-button">
        Read..
      </Link>
    </div>
  </div>
);

export default BlogCard;
