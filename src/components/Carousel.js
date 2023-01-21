import React from 'react'
import { Link } from 'react-router-dom'
import CarouselItem from './CarouselItem'
const Carousel = () => {
    return (
        <div style={{ "display": "flex" }}>
            <section class="ftco-section">
                <div class="container">
                    <div class="row">

                        <div style={{ "display": "flex" ,'flexWrap': 'wrap' }} class="col-md-12">
                            <CarouselItem />

                            <CarouselItem />

                            <CarouselItem />

                            <CarouselItem />



                        </div>
                    </div>
                </div></section >
        </div>

    )
}

export default Carousel