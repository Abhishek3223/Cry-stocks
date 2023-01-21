import React from 'react'
const ShowSearchCoins = ({coindetails}) => {
  return (
    <div className='main-container'>
      <div className='searchcoin'>
      <div className='flex-item coin-image' ><img src={coindetails.image} alt={coindetails.id}/></div >
      <div className='flex-item name' >{coindetails.name}</div >
      <div className='flex-item' >{coindetails.MarketCapRank}</div >
      <button className='like-btn'>LIKE</button>

    </div>
    </div>
  )
}

export default ShowSearchCoins
