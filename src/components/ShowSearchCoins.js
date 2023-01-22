import React, { useContext } from 'react'
import AllContext from "../context/Context";
import { useNavigate } from 'react-router-dom'

const ShowSearchCoins = ({ coindetails }) => {
  const navigate = useNavigate();
  const { SetChartID, setcoinDetails } = useContext(AllContext)



  const showFull = (k) => {
    setcoinDetails({
      img: coindetails.image,
      name: coindetails.name,
      id: coindetails.id,
      rank: coindetails.MarketCapRank,
      currentPrice: coindetails.currentPrice,
      Change: Math.round((coindetails.priceChange + Number.EPSILON) * 10000) / 10000
    })
    SetChartID(k)
    console.log(k);
    navigate('/fullchart')
  }
  return (
    <div className='main-container' onClick={() => showFull(coindetails.id)}>
      <div className='searchcoin'>
        <div className='flex-item coin-image' >
          <img src={coindetails.image} alt={coindetails.id} />
        </div >
        <div className='flex-item name' >{coindetails.name}</div >
        <div className='flex-item' >{coindetails.MarketCapRank}</div >
        {/* <button className='like-btn'>LIKE</button> */}

      </div>
    </div>
  )
}

export default ShowSearchCoins
