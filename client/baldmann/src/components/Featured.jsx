import React, { useRef } from "react";
import "./Featured.css";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const blogs = [
  {
    id:1,
    title:"From Thoughts to Action: Can AI Predict — and Prevent — Crime?",
    author:"Nainika Pathak",
    link:"/blog/17",
  },
  {
    id:2,
    title:"Building Digital Ghosts: Explore the eerie idea of using EEG and AI..",
    author:"Nainika Pathak",
    link:"/blog/16",
  },
  {
    id:3,
    title:"What If Your Brain Had an API? Speculation on mind to mind..",
    author:"Nainika Pathak",
    link:"/blog/15",
  },
  {
    id:4,
    title:"Darkside of our new messiah. Is Gen AI really trustworthy?",
    author:"Nainika Pathak",
    link:"/blog/14",
  },
  {
    id:5,
    title:"Can’t Feel My Face… Or My Brainwaves: What BCIs Say..",
    author:"Shreya Das",
    link:"/blog/13",
  },
  {
    id:6,
    title:"Beyond Boundaries, Drones that Dare Where Humans..",
    author:"Sanchitha V",
    link:"/blog/12",
  },
  {
    id:7,
    image:require("../pages/blog12.jpg"),
    title:"Gaming with Your Mind: The Future of BCI-Driven Video Games",
    author:"Pritha Sharma",
    link:"/blog/11",
  },
  {
    id:8,
    image:require("../pages/blog11.png"),
    title:"Machine Learning Is Everywhere                               ",
    author:"Khushi Yadav",
    link:"/blog/10",

  },
  {
    id: 9,
    image: require("../pages/office-blog.jpg"),
    title:"Empowering Lives After Adversity with BaldMann’s..",
    author: "The Office",
    link: "/blog/9",
  },
  {
    id:10,
    image: require("../pages/blog9a.jpg"),
    title:"Could BCIs Turn Your Most Romantic Memory into a..",
    author: "Simrat Kaur",
    link: "/blog/8",
  },
  {
    id: 11,
    image: require("../pages/blog8a.jpg"),
    title:"The Right Library: A Key to Smooth Arduino Projects",
    author: "Pritha Sharma",
    link: "/blog/7",
  },
  {
    id: 12,
    image: require("../pages/s_a2.jpg"),
    title: "The Future of Human-Computer Interaction",
    author: "Sanjana Sudarsan",
    link: "/blog/6",
  },
  {
    id: 13,
    image: require("../pages/Picture1.png"),
    title: "The Future of Romance: Could a BCI...",
    author: "Simrat Kaur",
    link: "/blog/5",
  },
  {
    id: 14,
    image: require("./ml.png"),
    title: "Importance of Balanced Datasets in Emotion Prediction Model.",
    author: "Rakesh Prajapati",
    link: "/blog/4",
  },
  {
    id: 15,
    image: require("./arduino.jpg"),
    title: "Hula-Looping with Arduino",
    author: "Pritha Sharma",
    link: "/blog/3",
  },
  {
    id: 16,
    image: require("./esp.jpg"),
    title:
      "Mind the Gap: How Neurotransmitters Affect Brain-Computer Interfaces",
    author: "Hritika Pathak",
    link: "/blog/2",
  },
  {
    id: 17,
    image: require("./karthik.jpg"),
    title: "Who should upgrade to ESP32 from Arduino?",
    author: "Sanjana Sudarsan",
    link: "/blog/1",
  },
];

const Featured = () => {
  const blogListRef = useRef(null);

  const handleNext = () => {
    if (blogListRef.current) {
      blogListRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (blogListRef.current) {
      blogListRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="featured-section">
      <p className="featured-title">Featured Blogs</p>
      <div className="latest-blog-card">
        <div className="latest-blog-content">
          <p className="latest-blog-title">{blogs[0].title}</p>
          <p className="latest-blog-author">by {blogs[0].author}</p>
          <Link to={blogs[0].link} className="latest-blog-read-link">
            <button className="latest-blog-read">Read More</button>
          </Link>
        </div>
      </div>

      <div className="other-blogs">
        <div className="arrow left-arrow" onClick={handlePrev}>
          <IoIosArrowDropleftCircle />
        </div>
        <div className="blogs-list" ref={blogListRef}>
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-content">
                <p className="blog-title">{blog.title}</p>
                <p className="blog-author">by {blog.author}</p>
                <Link to={blog.link} className="blog-read-link">
                  <button className="blog-read">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>
          <IoIosArrowDroprightCircle />
        </div>
      </div>
    </div>
  );
};

export default Featured;
