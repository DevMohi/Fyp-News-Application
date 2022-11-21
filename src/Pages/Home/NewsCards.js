import React from "react";
import Instructions from "./Instructions";
import NewsCard from "./NewsCard";

const NewsCards = ({ articles, activeArticle }) => {
  const infoCards = [
    {
      title: "News by Categories 📰",
      info: "Sports, Technology",
      text: "Tell me about Entertainment",
    },
    {
      title: "News by Terms 🗞️",
      info: "Bitcoin, Xbox...",
      text: "Tell me about Xbox",
    },
    {
      title: "Daily News Update 📅",
      info: "Daily",
      text: "Give me the Latest News",
    },
  ];

  if (!articles.length) {
    return (
      <div className="py-12 px-4">
        <p className=" text-3xl font-bold text-red-400 mt-5">Instructions</p>
        <small className="font-bold">
          Note: Please Follow According To The Instructions Given In the Cards
          Below, This will Ensure Good User Experience
        </small>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-5">
          {infoCards.map((info, i) => (
            <Instructions info={info} key={i}></Instructions>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-red-400">Instructions</h2>
          <ul>
            <li className="font-bold">
              For Going Back -
              <span className=" text-red-400">Try Saying : "Go Back"</span>
            </li>
            <li className="font-bold">
              For Opening An Article -{" "}
              <span className=" text-red-400">
                Try Saying : "Open Article 3"
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-4">
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
