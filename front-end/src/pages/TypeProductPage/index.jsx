import React, { useState } from "react";
import NavbarComp from "../../components/NavbarComp";
import CardProductComp from "../../components/CardProductComp";
import { Col, Pagination } from "antd";
import { WrapperProductType, WrapperNavbar, WrapperProducts } from "./styles";
import {useLocation} from "react-router-dom"
import * as productService from "../../services/productService";
import {useQuery} from "@tanstack/react-query"
import {useSelector} from "react-redux"
import { useDebounce } from "../../hooks/useDebounce";

const TypeProductPage = (type) => {

  const location = useLocation()
  console.log("location: " , location)
  const {state} = location
  const productSearch = useSelector((state) => state.product.search)
const searchDebounce = useDebounce(productSearch, 500)


  const [panigate, setPanigate] = useState({
    page: 0,
    limit: 5,
    totalPages:1,
  })

  const fetchProductType = async(context) =>{
    console.log("context: " , context)
    const type = context.queryKey[1]
    const page = context.queryKey[2]
    const limit = context.queryKey[3]
    const res = await productService.getProductType(type, page, limit)
    setPanigate({...panigate,totalPages: res?.totalPages})
    console.log("x: " , res)
    if(res?.status === "OK"){
      return res.data
    }
  }
  const onChange = (current, pageSize) => {
    console.log("PageSize", current, pageSize)
    setPanigate({...panigate,page: current -1, limit:pageSize})
    // setPanigate({...panigate,limit:pageSize})
    // panigate.page = current -1;
    // panigate.limit = pageSize
  };
  const {data: productsType} = useQuery(['product-type', state,panigate.page, panigate.limit ], fetchProductType)

  console.log("productType", productsType)

  return (
    <div style={{ backgroundColor: "var(--background-color)"}}>
      <WrapperProductType className="grid">
        <WrapperNavbar span={4}>
          <NavbarComp />
        </WrapperNavbar>
        <Col span={20} style={{backgroundColor:"#fff"}}>
          <WrapperProducts>
            {productsType?.filter((product) => {
              if(searchDebounce ===""){
                return product
              }else if(product?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())){
                return product
              }
            })?.map((productType, index) =>{
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
                  trademark= {productType.trademark}
                  origin = {productType.origin}
               />)
            })}
          </WrapperProducts>

          <Pagination
              defaultCurrent={panigate.page + 1}
              // total={panigate.totalPages}
              total={100}
              // pageSize={5}
              defaultPageSize={5}
              pageSizeOptions={[5, 10]}
              onChange={onChange}
              style={{ textAlign: "center", padding: "20px 0" }}
            /> 
        </Col>
      </WrapperProductType>
    </div>
  );
};

export default TypeProductPage;
