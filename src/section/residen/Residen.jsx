import React from 'react'
import './residen.css'

const Residen = () => {
  return (
    <section id="residen">
    <div className="container">
        <div className="residen_wrapper">
            <h3>Pilihan Auditor</h3>
            <h2>Residen Berbagai Kota</h2>
            <div className="img_item">
                <div className="img_box">
                    <img src="./images/image 5.png" alt="not found"/>
                    <h2>Magnolia Surabaya</h2>
                    <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                </div>
                <div className="img_box">
                    <img src="./images/image 6.png" alt="nit found"/>
                    <h2>Pinang Residences</h2>
                    <p>Jl. Deplu Raya No.16 RT.5, RW.003
                        Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
                </div>
                <div className="img_box">
                    <img src="./images/image 7.png" alt="not found"/>
                    <h2>South Grove</h2>
                    <p>1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Residen