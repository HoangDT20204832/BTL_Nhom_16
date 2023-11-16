import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperHeadingProduct,WrapperListProduct,WrapperProduct } from "./styles";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider_1 from "../../assets/img/slider_1.jpg"
import slider_2 from "../../assets/img/slider_2.jpg"
import slider_3 from "../../assets/img/slider_3.jpg"
import slider_4 from "../../assets/img/slider_4.jpg"
import CardProductComp from "../../components/CardProductComp";
import { Pagination, Row } from "antd";
const HomePage = () => {
  const arr = [{name:"TV", img:"https://sudospaces.com/viomivietnam-vn/2022/05/tivi-xiaomi-mi-tv-p1-55-inch-hang-xuat-eu-chinh-hang-gia-re-nhat-1-large.jpg"},
{name:"Máy tính", img:"https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg"},
{name:"Điện thoại", img: "https://cdn.tgdd.vn/Products/Images/42/303833/iphone-15-pro-blue-thumbnew-600x600.jpg"}];

const onChange = ()=>{}
  return (
    <div id="container"style={{ padding: "0px 60px 20px", backgroundColor:"#F5F5F5" }}>
      <SliderComponent  arrImages={[slider_1, slider_2, slider_3, slider_4]} />

      <WrapperListProduct >
        <WrapperHeadingProduct >DANH MỤC</WrapperHeadingProduct>
        <WrapperProduct>
          {arr.map((product, index) => (
            <TypeProduct name={product.name} img={product.img} key={index} />
          ))}
        </WrapperProduct>
      </WrapperListProduct>

      <Row style={{marginTop:"20px", gap:"20px", justifyContent:"center"}}>
        <CardProductComp />
        <CardProductComp />
        <CardProductComp />
        <CardProductComp />
        <CardProductComp />
        <CardProductComp />
        <CardProductComp />
        <CardProductComp />
        <CardProductComp />
        <CardProductComp />
        </Row>

        <Pagination defaultCurrent={1} total={500} onChange={onChange} style={{textAlign:"center", marginTop:"20px"}} />
    </div>
  );
};

export default HomePage;
