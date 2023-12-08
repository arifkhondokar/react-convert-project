import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    
    <nav id="navber">
        <div className="container">
            <div className="nav_wrapper">
                
                <div className="nav_logo_part">
                    <div className="nav_logo">
                        <a href="#">
                            <img src="./images/logo.png" alt="NOT FOUND"/>   
                        </a>
                    </div>
                    <div className="nav_menu">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Properties<i className="fa-solid fa-angle-down"></i></a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
    {/* <!-- banner part------------------- --> */}
                <div className="nav_text_part">
                    <div className="nav_text">
                        <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
                        <p>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
                        <form className="sea_bar">
                            <i className="fa-solid fa-location-dot"><input type="text" placeholder="Search location, properties, residental group"/></i>
                            <a className="btn_sea" href="#">search</a>
                        </form>
                    </div>
                    <div className="nav_img">
                        <img src="./images/img001.png" alt="NOT FOUND"/>
                    </div> 
                </div>
                <div className="info">
                    <div>
                        <h2>200<strong>+</strong></h2>
                        <p>Residental grup telah bergabung</p>
                    </div>
                    <div>
                        <h2>10<strong>+</strong></h2>
                        <p>Sudah berpengalaman </p>
                    </div>
                    <div>
                        <h2>999<strong>+</strong></h2>
                        <p>Properti tersedia di berbagai Kota</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar