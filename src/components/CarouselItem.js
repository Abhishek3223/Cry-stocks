import { Link } from 'react-router-dom'
import React from 'react'
import '../css/carouselItem.css'
const CarouselItem = () => {
    return (
        <div class="item">
            <div className="stock-logo">
                <img src="/cn.png" alt="" srcset="" />
            </div>
            <div className="stock-details">
                <p className="stock-title">
                    Tata consultancy
                </p>
                <div className='stocks-priceDetails'>
                    <div className="stocks-priceDetails">
                        <p className='price'>34,500</p>
                        <p className="change +"> +2%</p>
                    </div>
                    <i class="fa-solid fa-coins fa-3x"></i></div>
            </div>
        </div>
    )
}

export default CarouselItem