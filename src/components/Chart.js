
import React, { useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect } from "react";
import AllContext from "../context/Context";




const Chart = (props) => {
    const [labelData, setlabel] = useState([]);
    const [priceData, setprice] = useState([]);
    const { ChartID } = useContext(AllContext)

    const GetData = async () => {
        // post req for getting theuser info

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${ChartID}/market_chart?vs_currency=usd&days=7`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        // console.log(json.prices);
        return json
    }
    const label = []
    const price = []
    useEffect(() => {
        return async () => {
            const json = await GetData();

            await json.prices.map((e) => {
                const date = new Date(e[0]).toLocaleDateString('en-us')
                label.push(date);
                // console.log(date);
                price.push(e[1])
            });
            setlabel(label)
            setprice(price)

        }
    }, [])


    const data = {
        labels: labelData,
        datasets: [
            {
                label: "First dataset",
                data: priceData,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };



    return (


        <Line data={data} />

    )
}

// export default Linechart

export default Chart