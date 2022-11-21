import React, { createRef, useEffect, useState } from "react";

const NewsCard = ({ article, i, activeArticle }) => {
  const { description, publishedAt, source, title, url, urlToImage } = article;

  //This is for scrolling automatically
  const [elRefs, setElRefs] = useState([]);

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  //Till here scrolling code

  // card: {
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "space-between",
  //     borderBottom: "10px solid white",
  //   },

  return (
    <div
      className="card lg:max-w-lg bg-base-100 shadow-xl "
      style={
        activeArticle === i
          ? { borderBottom: "10px solid #22289a" }
          : { borderBottom: "10px solid white" }
      }
      ref={elRefs[i]}
    >
      <figure>
        <img
          src={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
          alt={title}
        />
      </figure>
      <div className="card-body" href={url} target="_blank">
        <h2 className="font-bold">Title: {title}</h2>
        <p className="text-xs pt-3 ">{description}</p>
        <div className="flex justify-between pt-3">
          <div className="text-secondary font-bold ">
            <a href={url} target="_blank" rel="noreferrer">
              Learn More
            </a>
          </div>
          <div className="badge badge-outline cursor-pointer hover:text-secondary">
            {i + 1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
