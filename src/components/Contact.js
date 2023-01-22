import React from 'react'
import '../css/styles.css'
const Contact = () => {
  return (
    <div>
      <section id="page-header" className="contact-header">
    
    <div>
      <h1>Contact US</h1>
      <p>We would love to hear from you!</p>
    </div>

  </section>

  <section id="contact-details" className="section-p1">
    <div className="details">
      <span>GET IN TOUCH</span>
      <h1>Our agency location</h1>
      <h3>Head Office</h3>
      <div className="">
        <li>
          <i className="fa-solid fa-map"></i>
          <p>IIITDM Jabalpur, Madhya Pradesh</p>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <p>crystock@gmail.com</p>
        </li>
        <li>
          <i className="fa-solid fa-phone"></i>
          <p>+91 ***** 22222</p>
        </li>
      </div>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14671.317024436508!2d80.01655882637593!3d23.17643105800392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a94397365dd3%3A0x5f9aeb812c2678c9!2sIIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1674059956507!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="001"></iframe>
    </div>
  </section>

  <section id="contact-timings">
      <div className="contact-hours">
          <h1>OUR HOURS</h1>
          <p>Mon - Fri: 9am - 6pm</p>
          <p>Sat: 10am - 2pm</p>
          <p>Sun: Closed</p>
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

export default Contact
