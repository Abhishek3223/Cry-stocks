import React, { useContext } from 'react'
import AllContext from "../context/Context";
import { useNavigate } from 'react-router-dom'


const ShowCoins = ({ coindetails }) => {
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
    SetChartID(k);
    console.log(k);
    navigate('/fullchart')
  }
  return (
    <div className='coin' onClick={() => showFull(coindetails.id)}>
      <div className='flex-item coin-image' ><img src={coindetails.image} alt={coindetails.id} /></div >
      <div className='' >{coindetails.name}</div >
      <div className='Wer2gh' >{coindetails.currentPrice}$</div >
      <div  >{coindetails.MarketCapRank}</div >
      <div className='Wer2gh'>{Math.round((coindetails.priceChange + Number.EPSILON) * 10000) / 10000}$</div >
    </div>
  )
}

export default ShowCoins
