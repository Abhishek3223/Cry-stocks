import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AllContext from '../context/Context'
import '../css/login.css'
import { Cross, Mail } from '../images/image'

const Login = (props) => {

    const navigate = useNavigate();
    const context = useContext(AllContext)

    const { setloginStatus, Login } = context;

    const gobacktoHome = () => {
        navigate('/');
    }

    const [credentials, setCredentials] = useState({ email: "", password: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("submit button has been clciked")
        const json = await Login(credentials)
        console.log(json)
        if (json.Success) {
            localStorage.setItem('token', json.AUTH_TOKEN);
            // setloginStatus(true)
            navigate('/')

        }

    }

    const change = (e) => {
        setCredentials({
            ...credentials, [e.target.name]: [e.target.value]
        })
        // console.log(credentials)
    }
    return (
        <div className='loginpage'>
            <div className="session"  >

                <div className="left">
                    {/* <Cross /> */}
                </div>

                <form onSubmit={handleSubmit} action="" className="log-in" >
                    <div className="cross" onClick={gobacktoHome}>
                        <Cross />
                    </div>
                    <h4> Hi We are <span>Scraper</span></h4>
                    <p>Welcome back! Log in to your account to view today's clients:</p>
                    <div className="floating-label">
                        <input placeholder="Email" type="email" name="email" id="email" onChange={change} />
                        <label htmlFor="email">Email:</label>

                        <div className="icon">
                            <Mail />
                        </div>

                    </div>
                    <div className="floating-label">
                        <input placeholder="Password" type="password" name="password" id="password" onChange={change} />
                        <label htmlFor="password">Password:</label>
                        <div className="icon">

                            <Cross />
                            {/* <i class="fa-regular fa-lock"></i> */}
                        </div>

                    </div>
                    <button className='button' type="submit" >
                        Log in
                    </button>
                    <Link >
                        {/* onClick={navigate('/signup')} */}
                        <p className="dont-have-acnt">Create one ?</p>
                    </Link>
                </form>
            </div>

        </div >
    )
}

export default Login