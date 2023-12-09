import React from "react";
import NavbarComp from "../../components/NavbarComp";
import CardProductComp from "../../components/CardProductComp";
import { Col, Pagination } from "antd";
import { WrapperProductType, WrapperNavbar, WrapperProducts } from "./styles";
import {useLocation} from "react-router-dom"
import * as productService from "../../services/productService";
import {useQuery} from "@tanstack/react-query"

const TypeProductPage = (type) => {

  const location = useLocation()
  console.log("location: " , location)
  const {state} = location

  const fetchProductType = async(context) =>{
    console.log("context: " , context)
    const type = context.queryKey[1]
    const res = await productService.getProductType(type)
    console.log("res typeprop: " , res)
    if(res?.status === "OK"){
      return res.data
    }
  }
  const {data: productsType} = useQuery(['product-type', state], fetchProductType)

  // console.log("productType", productsType)
  const onChange = () => {};
  return (
    <div style={{ backgroundColor: "var(--background-color)"}}>
      <WrapperProductType className="grid">
        <WrapperNavbar span={4}>
          <NavbarComp />
        </WrapperNavbar>
        <Col span={20} style={{backgroundColor:"#fff"}}>
          <WrapperProducts>
            {productsType?.map((productType, index) =>{
               return (
               <CardProductComp
                  key={productType._id}
                  countInStock={productType.countInStock}
                  description={productType.description}
                  discount={productType.discount}
                  image={productType.image}
                  name={productType.name}
                  priceOld={productType.priceOld}
                  priceNew={productType.priceNew}
                  rating={productType.rating}
                  selled={productType.selled}
                  type={productType.type}
                  id = {productType._id} 
               />)
            })}
          </WrapperProducts>
          <Pagination
              defaultCurrent={1}
              total={500}
              onChange={onChange}
              style={{ textAlign: "center", padding: "20px 0" }}
            />
        </Col>
      </WrapperProductType>
    </div>
  );
};

export default TypeProductPage;
