// import React, { useContext, useState } from 'react'
// import AllContext from "../context/Context";
// import { Link, useNavigate } from 'react-router-dom'

// const Login = () => {
//     const navigate = useNavigate();
//     const { Login } = useContext(AllContext);
//     const [credentials, setCredentials] = useState({ email: "", password: "" })

//     const handleSubmit = () => {

//         Login(credentials);
//     };
//     const change = (e) => {
//         setCredentials({
//             ...credentials, [e.target.name]: [e.target.value]
//         })
//         // console.log(credentials)
//     }

//     return (
//         <div>
//             <section class="vh-100">
//                 <div class="container-fluid">
//                     <div class="row">
//                         <div class="col-sm-6 text-black">

//                             <div class="px-5 ms-xl-4">
//                                 <i class="fa-solid fa-lock fa-2x me-3 pt-5 mt-xl-4" style={{ "color": "#709085" }}></i>
//                                 <span class="h1 fw-bold mb-0">crystock</span>
//                             </div>


//                             <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-1 pt-5 pt-xl-0 mt-xl-n5">

//                                 <form action="/login" method="POST" style={{ "width": "23rem" }}>

//                                     <h3 class="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px" }}>Log in</h3>

//                                     <div class="form-outline mb-4">
//                                         <input type="email" id="form2Example18" class="form-control form-control-lg" name="email" onChange={change} />
//                                         <label class="form-label" for="form2Example18">Email address</label>
//                                     </div>

//                                     <div class="form-outline mb-4">
//                                         <input onChange={change} type="password" id="form2Example28" class="form-control form-control-lg" name="password" />
//                                         <label class="form-label" for="form2Example28">Password</label>
//                                     </div>

//                                     <div class="pt-1 mb-4">
//                                         <button class="btn btn-info btn-lg btn-dark btn-block" type="submit" onClick={handleSubmit}>Login</button>
//                                         <a class="btn btn-block" href="/auth/google" role="button">
//                                             <i class="fab fa-google"></i>
//                                         </a>
//                                     </div>

//                                     <p>Don't have an account? <Link to="/Signup" class="link-info">Register here</Link></p>

//                                 </form>

//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </section >
//         </div >
//     )
// }

// export default Login