import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./NewsCards";
import wordToNumbers from "word-to-numbers";

const Home = () => {
  //Setting Up The State
  const [newsArticles, setNewsArticles] = useState([]);

  //For Scrolling
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: "ea5307235badf16635d414ed8b0b7d582e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "newHeadlines") {
          setNewsArticles(commandData.data);
          setActiveArticle(-1);
        }

        if (commandData.command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
        //This is
        //For Opening Article in a new page
        if (commandData.command === "open") {
          //Getting number from backend
          const number = commandData.number;
          //For numbers , parsing numbers to reduce mistakes

          const parsedNumber =
            number.length > 2 ? wordToNumbers(number, { fuzzy: true }) : number;
          const article = commandData.data[parsedNumber - 1];

          if (parsedNumber > commandData.data.length) {
          } else if (article) {
            window.open(article.url, "_blank");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>ReadSmart</h1>
      <NewsCards
        articles={newsArticles}
        activeArticle={activeArticle}
      ></NewsCards>
    </div>
  );
};

export default Home;
