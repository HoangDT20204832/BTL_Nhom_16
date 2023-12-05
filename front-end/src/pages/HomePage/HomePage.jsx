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
import {useQuery} from "@tanstack/react-query"
import * as productService from "../../services/productService"

const HomePage = () => {
  const arr = [{name:"TV", img:"https://sudospaces.com/viomivietnam-vn/2022/05/tivi-xiaomi-mi-tv-p1-55-inch-hang-xuat-eu-chinh-hang-gia-re-nhat-1-large.jpg"},
{name:"Máy tính", img:"https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg"},
{name:"Điện thoại", img: "https://cdn.tgdd.vn/Products/Images/42/303833/iphone-15-pro-blue-thumbnew-600x600.jpg"}];
const onChange = ()=>{}

const fetchProductAll = async() =>{
 const res= await productService.getAllProducts()
 console.log("hii",res)
 return res
}
const {data: products} = useQuery(['products'], fetchProductAll, {retry: 3, retryDelay: 1000})
// console.log('products', products)
  return (
    <div id="container" style={{ backgroundColor:"#F5F5F5" }}>
      <div className="grid">
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
  {products?.data?.map((product)=>{
  
  return <CardProductComp 
            key={product._id}
            countInStock={product.countInStock}
            description={product.description}
            discount={product.discount}
            image={product.image}
            name={product.name}
            priceOld={product.priceOld}
            priceNew={product.priceNew}
            rating={product.rating}
            selled={product.selled}
            type={product.type}
   />
  })}

  </Row>

  <Pagination defaultCurrent={1} total={500} onChange={onChange} style={{textAlign:"center", padding:"20px 0"}} />
      </div>
      
    </div>
  );
};

export default HomePage;
