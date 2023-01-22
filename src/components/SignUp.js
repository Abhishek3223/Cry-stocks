import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AllContext from '../context/Context'
import '../css/login.css'
import { Cross, Mail } from '../images/image'

const SignUp = (props) => {

    const navigate = useNavigate();
    const context = useContext(AllContext)

    const { SignUp } = context;

    const gobacktoHome = () => {
        navigate('/login');
    }

    const [credentials, setCredentials] = useState({ email: "", password: "", name: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("submit button has been clciked")
        const json = await SignUp(credentials)
        console.log(json)
        if (json.Success) {
            alert("succcessfully Loged In success")
            navigate('/login')
        }
        else {

            alert(" danger")
        }
    }

    const change = (e) => {
        setCredentials({
            ...credentials, [e.target.name]: [e.target.value]
        })
        console.log(credentials)
    }
    return (
        <div className='loginpage'>
            <div className={"session"}>

                <div className="left">
                    {/* <Cross /> */}
                </div>

                <form onSubmit={handleSubmit} action="" className="log-in" >
                    <div className="cross" onClick={gobacktoHome}>
                        <Cross />
                    </div>
                    <h4> Hi We are <span>Scraper</span></h4>
                    <p>We welcome you to our communitie</p>
                    <div className="floating-label">
                        <input placeholder="Email" type="email" name="email" id="email" onChange={change} />
                        <label htmlFor="email">Email:</label>

                        <div className="icon">
                            <Mail />
                        </div>

                    </div>
                    <div className="floating-label">
                        <input placeholder="Username" type="text" name="name" id="name" onChange={change} />
                        <label htmlFor="email">UserName</label>

                        <div className="icon">
                            <Mail />
                        </div>

                    </div>
                    <div className="floating-label">
                        <input placeholder="Password" type="password" name="password" id="password" onChange={change} />
                        <label htmlFor="password">Password:</label>
                        <div className="icon">

                            <Cross />
                        </div>

                    </div>
                    <button className='button' type="submit" >
                        Create
                    </button>
                    {/* <Link to='/login' >
            <p className="dont-have-acnt">Create one ?</p>
          </Link> */}
                </form>
            </div>

        </div>
    )
}

export default SignUp