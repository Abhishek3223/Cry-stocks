import React from 'react'
import '../css/styles.css'
const About = () => {
  return (
    <div>
      <section id="header-contact">
        <div className="image-header">
            <img src="https://images.pexels.com/photos/6766083/pexels-photo-6766083.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        </div>
        <div className="about-details-container">
            <div className="about-details">
            <h1>ABOUT US</h1>
            <p>Since 2000, ThreeTraders has continuously and consistently served our customers with friendliness and commitment. 
                Even as the financial marketplace changes and develops, we’ve remained focused on the needs of our clients. 
                We embrace the notion that each of our clients has specific goals and a unique investing strategy and trading style. 
                That’s why we offer personalized financial services to help them maintain a portfolio that suits their needs and lifestyle.
                We combine the latest in trading technology with our accessible investment platform and exceptional customer service.</p>
            </div>
        </div>
    </section>
    <section id="our-team">
        <h1>OUR TEAM</h1>
        <p>Who we Are</p>
        <div id="our-team-details">
            <div className="developers">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <div>
                <h3><a className="icons" href="#"><i className="fa-brands fa-linkedin fa-x"></i></a> PRERNA DABI</h3>
                <p>SOPHOMORE <br/>@IIITDM JABALPUR</p>
                </div>
            </div>
            <div className="developers">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <div>
                <h3><a className="icons" href="#"><i className="fa-brands fa-linkedin fa-x"></i></a> HIMANSHU YADAV</h3>
                <p>SOPHOMORE <br/>@IIITDM JABALPUR</p>
                </div>
            </div>
            <div className="developers">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <div>
                <h3><a className="icons" href="#"><i className="fa-brands fa-linkedin fa-x"></i></a> ABHISHEK RANJAN</h3>
                <p>SOPHOMORE <br/>@IIITDM JABALPUR</p>
                </div>
            </div>
        </div>
    </section>
    <section id="footer-details">
        <div>
            <h6>crystock@gmail.com</h6>
            <p>©2023 crystock</p>
        </div>
    </section>
    </div>
  )
}

export default About
