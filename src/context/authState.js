import { useState } from "react";
import AllContext from "./Context";
// import axios from 'axios';

const ALLState = (props) => {
    const host = "http://localhost:5000"


    const [LoginStatus, setloginStatus] = useState(false);
    const [ChartID, SetChartID] = useState('');
    const [coinDetails, setcoinDetails] = useState({
        name: "",
        id: "",
        currentPrice: "",
        Change: "",
        img: "",
        rank: ""
    })

    const Login = async (credentials) => {
        console.log(credentials);

        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: (credentials.email)[0],
                    password: (credentials.password)[0]
                }
            )
        });


        const json = await response.json()
        if (json.Success) {
            setloginStatus(true)
            //ActivateAlert("Succesfully loged in", "success")
        }
        else {
            //ActivateAlert("Invalid Credentials", "warning")
        }
        console.log(json);
        return json


    }
    const SignUp = async (credentials) => {
        console.log(credentials);

        const response = await fetch("http://localhost:5000/api/auth/CreatUSER", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: (credentials.email)[0],
                    password: (credentials.password)[0],
                    name: (credentials.name)[0]
                }
            )
        });


        const json = await response.json()
        if (json.Success) {
            // setloginStatus(true)
            //ActivateAlert("Succesfully created a account", "success")
        }
        console.log(json);
        return json


    }
    const NotesInitial = []


    const ShowfullChart = (k) => {

        SetChartID(k);
        // navigate('/fullchart')
    }
    const Getuser = async () => {
        // post req for getting theuser info

        const response = await fetch("http://localhost:5000/api/auth/GetUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json()
        return json
    }


    return (
        <AllContext.Provider value={{ coinDetails, setcoinDetails, LoginStatus, Login, setloginStatus, Getuser, ChartID, SetChartID, ShowfullChart }}>
            {props.children}
        </AllContext.Provider>


    )

}
export default ALLState;