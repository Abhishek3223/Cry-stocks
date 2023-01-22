import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import DisplayNews from './DisplayNews.js'
import '../css/GetNews.css'

// functional components of news
function GetNews() {
  const [newsArray, setNewsArray] = useState([]);
  const [page, setPage] = useState(1);
  const fetchNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=crypto&apiKey=c5a0b3775dec4f19af8f680bb039be30"
    );
    console.log(response.data.articles)
    setNewsArray(response.data.articles)
  };
  useEffect(() => {
    fetchNews();
  }, []);

  const renderedNews = newsArray.slice((page - 1) * 10, (page - 1) * 10 + 10).map((a, key) => {
    return (<DisplayNews news={a} key={key} />)

  })
  const handleClickForward = () => {
    if (page === 10) {
      setPage(1)
    }
    else { setPage(page + 1) }

  }

  const handleClickBackward = () => {
    if (page === 1) {
      setPage(10)
    }
    else { setPage(page - 1) }

  }
  return (
    <div className="news-container">
      <h1 className="Head">Crypto-NEWS</h1>
      <div className="news-display" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", 'gap': "1.7rem" }}>
        {renderedNews}
      </div>
      <div>
        <button className="navg move" onClick={handleClickBackward}>

          <span className="arrow">&#60;</span>
          <span className="arrow">&#60;</span>
        </button>

        <button className="navg pagenum">{page}</button>
        <button className=" navg move" onClick={handleClickForward}>
          <span className="arrow">&#62;</span>
          <span className="arrow">&#62;</span>
        </button>
      </div>
    </div>)
}

export default GetNews;
