import React from "react";
import NewsCard from "./NewsCard";

const NewsCards = ({ articles, activeArticle }) => {
  return (
    <>
      <h1>Data : {articles.length}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {articles.map((article, i) => (
          <NewsCard
            key={i}
            article={article}
            i={i}
            activeArticle={activeArticle}
          />
        ))}
      </div>
    </>
  );
};

export default NewsCards;
