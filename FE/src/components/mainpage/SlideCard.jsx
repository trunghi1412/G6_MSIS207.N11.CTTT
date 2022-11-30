import React from 'react'
import Sdata from './Sdata'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
    /*Setup "react-Slick (chức năng kéo qua để sp) */
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,

      /*Tạo thanh kiểu dấu chấm */
      appendDots: (dots) => {
        return <ul style={{margin: "0px"}}>{dots}</ul>
      }
    }

  return (
    <>
    {/*Setup "react-Slick (kéo qua)*/}
    <Slider {...settings}>

    {/* Lấy dữ liệu từ Sdata */}
    {Sdata.map((value, index) => {
      return (
        <div className='box d_flex top' key={index}>
          <div className='left'>
            <h1>{value.title}</h1>
            <p>{value.desc}</p>

            <button className='btn-primary'>Visit Collections</button>
          </div>

          <div className='right'>
            <img src={value.cover} alt=''/>
          </div>
        </div>
      )
    })}
    </Slider>
    </>
  )
}

export default SlideCard
