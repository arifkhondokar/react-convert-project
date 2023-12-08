import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
    <div className="container">
        <div className="footer_wrapper">
            <div className="logo_1">
                <img src="./images/logo_2.png" alt="not found"/>
            </div>
            <div className="logo_icon">
                <ul>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer