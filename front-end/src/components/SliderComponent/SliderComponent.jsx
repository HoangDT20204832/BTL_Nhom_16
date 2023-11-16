import React from 'react'
import Slider from "react-slick"
import {Image, Row, Col} from "antd"
import "./style.css"
const SliderComponent = ({arrImages}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Row style={{paddingTop:"20px"}}>
    <Col span={16} >
    <Slider {...settings} >
      {arrImages.map(img =>{
        return (
          <Image src={img} alt="slider" style={{height: "calc(width /3);"}}/>
        )
      })}
     </Slider>
    </Col>
    <Col span={8} className='wrapper-img'>
      <Image className='img'  src= "https://cf.shopee.vn/file/vn-50009109-0949ec209e4bf197a9b67c98f3e2172c_xhdpi"/>
      <Image className='img' src= "https://cf.shopee.vn/file/vn-50009109-0949ec209e4bf197a9b67c98f3e2172c_xhdpi"/>
    </Col>
  </Row>


  )
}

export default SliderComponent