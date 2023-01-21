import React, { useContext } from 'react'
import '../css/chartArea.css'
import Chart from './Chart';
import AllContext from "../context/Context";

const GraphArea = () => {
    const { coinDetails } = useContext(AllContext)

    return (
        <div className="chartPart">
            <div className="details">
                {/* <div className="details-title"> */}
                <img src={coinDetails.img} alt="" srcset="" />
                <p className="details-title">
                    {coinDetails.name}
                </p>

                <div className="price-data">
                    <p className="col">
                        <span style={{ "color": "#ffd700" }}>#{coinDetails.rank}</span> at market Cap
                    </p>
                    <p className="col">
                        ${coinDetails.currentPrice}
                        <span className='green'> {coinDetails.change}</span>
                    </p>
                    {/* <p className="col">

                    </p> */}

                </div>
                {/* </div> */}
            </div>
            <div className="Chart">
                <Chart id='bitcoin' />
            </div>


        </div>
    )
}

export default GraphArea