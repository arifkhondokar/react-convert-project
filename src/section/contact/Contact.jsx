import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
    <div className="container">
        <div className="con_wrapper">
            <div className="left_side">
                <h3>Hubungi Kami</h3>
                <div className="con_info">
                    <div className="one">
                        <div className="one_top">
                            <div className="call_icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="call">
                                <ul>
                                    <li>call</li>
                                    <li>+1234567890343</li>
                                </ul>
                            </div>
                        </div>
                        <a className="btn" href="#">Call Now</a>
                    </div>
                    <div className="two">
                        <div className="two_top">
                            <div className="email_icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="email">
                                <ul>
                                    <li>email</li>
                                    <li>help@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <a className="btn" href="#">Email Now</a>
                    </div>
                </div> 
            </div>
            <div className="right_side">
                <h3>Penghargaan</h3>
                <ul>
                    <li className="pooter_logo-1"><img src="./images/image 8.png" alt="not found"/></li>
                    <li className="pooter_logo-2"><img src="./images/image 9.png" alt="not found"/></li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact