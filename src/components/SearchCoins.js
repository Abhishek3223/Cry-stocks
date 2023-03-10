import axios from "axios";
import React from "react";
import { useState } from "react";
import '../css/searchCoins.css'
import ShowSearchCoins from "./ShowSearchCoins";
import Welcome from './Welcome';

const SearchCoins = () => {
  const [title, settitle] = useState("");
  const [searchedCoins, setSearchedCoins] = useState([]);
  const handleOnChange = (event) => {
    settitle(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    searchcoin(title);
    settitle("");
  };
  const searchcoin = async (title) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${title}`
    );
    const result = response.data.coins.map((c) => {
      return {
        name: c.name,
        id: c.id,
        image: c.large,
        MarketCapRank: c.market_cap_rank,
        currentPrice: c.current_price,
        priceChange: c.price_change_24h,

      };
    });
    setSearchedCoins(result);
  };
  return (
    <div>
      <Welcome />
      <div className="search-bar-container">
        <h1 style={{ "color": "black", "fontSize": "4rem", "textAlign": "center" }}># Discover</h1>
        <form onSubmit={handleOnSubmit} className='form'>
          <input
            onChange={handleOnChange}
            value={title}
            placeholder="Search your Crypto here"
            className="Search-bar"
          />
        </form>
      </div>
      <div className="search-coins-list">
        {searchedCoins.slice(0, 5).map((c) => {
          return <ShowSearchCoins key={c.id} coindetails={c} />;
        })}
      </div>

    </div>
  );
};

export default SearchCoins;
