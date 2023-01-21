import React, { useState, useContext, useEffect } from 'react'
import AllContext from '../context/Context'
import Carousel from './Carousel';
import Chart from './Chart';

const Home = () => {
    const contexts = useContext(AllContext)
    const { GetData } = contexts;
    useEffect(() => {
        return () => {
            // const d = GetData();
            // console.log(d);
        }
    }, [])

    return (
        <div style={{
            'border': '2px solid red',
            'width': "80vw",
            'height': '80vh'
        }}>
            {/* <Carousel /> */}
            {/* <Chart id='bitcoin' /> */}

        </div>
    )
}

export default Home