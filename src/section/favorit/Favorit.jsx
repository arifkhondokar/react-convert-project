import React from 'react'
import './favorit.css'

const Favorit = () => {
  return (
    <section id="favorit">
        <div className="container">
            <div className="favorit_wrapper">
                <h3>Pilihan konsumen</h3>
                <h2>Residen Favorit</h2>
                <div className="favorit_item">
                    <div className="favorit_images">
                        <div className="favorit_img_1">
                            <img src="./images/img002.png" alt="not found"/>
                        </div>
                        <div className="favorit_img_2">
                            <img src="./images/img003.png" alt="not found"/>
                        </div>
                    </div>
                    
                    <div className="favorit_text">
                        <h2>Bangunan yang dirancang oleh Aristektur Handal</h2>
                        <p>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
                        <div className="btn_part">
                            <ul>
                                <li><a className="btn_1" href="#"><i className="fa-solid fa-phone"></i>Hubungi Kami</a></li>
                                <li><a className="btn_2" href="#">Explore lebih banyak</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Favorit