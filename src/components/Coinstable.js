import React, { useState, useEffect } from "react";
// import AllContext from "../context/Context";
import axios from "axios";
import ShowCoins from "./ShowCoins";
import "../css/Coinstable.css";


const Coinstable = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  // const navigate = useNavigate();
  // const { SetChartID }  = useContext(AllContext)
  // = context

  const fetchcoins = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log(response.data);
    const result = response.data.map((c) => {
      return {
        name: c.name,
        id: c.id,
        image: c.image,
        currentPrice: c.current_price,
        priceChange: c.price_change_24h,
        MarketCapRank: c.market_cap_rank,
      };
    });
    setCoins(result);
  };

  useEffect(() => {
    fetchcoins();
  }, []);
  console.log(coins);

  const handleClickForward = () => {
    if (page === 10) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  const handleClickBackward = () => {
    if (page === 1) {
      setPage(10);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div className="main-container">

      <div className="coin-list">
        <h1 className="trending">#TrendingMania</h1>
        {coins.slice((page - 1) * 10, (page - 1) * 10 + 10).map((c) => {
          return <ShowCoins key={c.id} coindetails={c} />;
        })}
      </div>
      <div className="Pagination">
        <button className="navg move" onClick={handleClickBackward}>

          <span>&#60;</span>
          <span>&#60;</span>
        </button>
        <button className="navg pagenum">{page}</button>
        <button className=" navg move" onClick={handleClickForward}>
          <span>&#62;</span>
          <span>&#62;</span>
        </button>
      </div>
    </div>
  );
};

export default Coinstable;
