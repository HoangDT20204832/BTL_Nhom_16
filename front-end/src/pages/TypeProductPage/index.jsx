import React, { useEffect, useState } from "react";
import NavbarComp from "../../components/NavbarComp";
import CardProductComp from "../../components/CardProductComp";
import { Col, Pagination } from "antd";
import { WrapperProductType, WrapperNavbar, WrapperProducts,NavbarHeader,
  NavbarItem,
  NavbarItemLable,
  NavbarItemPrice,NavbarItemOrigin,
  NavbarOriginRadio,NavbarItemPriceBtn,NavbarItemSelect } from "./styles";
import { useLocation } from "react-router-dom";
import * as productService from "../../services/productService";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";

const TypeProductPage = (type) => {
  const location = useLocation();
  console.log("location: ", location);
  const { state } = location;
  const productSearch = useSelector((state) => state.product.search);
  const searchDebounce = useDebounce(productSearch, 500);

  const [panigate, setPanigate] = useState({
    page: 0,
    limit: 5,
    totalPages: 1,
  });

  // const fetchProductType = async(context) =>{
  //   console.log("context: " , context)
  //   const type = context.queryKey[1]
  //   const page = context.queryKey[2]
  //   const limit = context.queryKey[3]
  //   const res = await productService.getProductsByType(type, page, limit)
  //   setPanigate({...panigate,totalPages: res?.totalPages})
  //   console.log("x: " , res)
  //   if(res?.status === "OK"){
  //     return res.data
  //   }
  // }
  const onChange = (current, pageSize) => {
    console.log("PageSize", current, pageSize);
    setPanigate({ ...panigate, page: current - 1, limit: pageSize });
    // setPanigate({...panigate,limit:pageSize})
    // panigate.page = current -1;
    // panigate.limit = pageSize
  };
  // const {data: productsType} = useQuery(['product-type', state,panigate.page, panigate.limit ], fetchProductType)

  // console.log("productType", productsType)
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [price, setPrice] = useState("");
  // const [name, setName] = useState('');
  const [origin, setOrigin] = useState("");
  const [rating, setRating] = useState(0);

  // let productsType=[];
  const [productsType, setProductsType] = useState(null);

  const handleClickPrice = () => {
    setPrice(`${minPrice}-${maxPrice}`);
  };
  const fetchData = async () => {
    const queryParams = [];

    if (price) queryParams.push(`priceNew=${price}`);
    if (productSearch) queryParams.push(`name=${productSearch}`);
    if (origin) queryParams.push(`origin=${origin}`);
    if (rating) queryParams.push(`rating=${rating}`);
    if (state) queryParams.push(`type=${state}`);
    if (panigate.page) queryParams.push(`page=${panigate.page}`);
    if (panigate.limit) queryParams.push(`limit=${panigate.limit}`);

    const queryString = queryParams.join("&");

    const response = await productService.getProductsByType(queryString);
    const dataPro = response.data;
    console.log("dataPro: ", dataPro);
    setProductsType(dataPro);
  };

  useEffect(() => {
    fetchData();
  }, [price, productSearch, origin, rating, panigate.page, panigate.limit]);
  // const {data: productsType} = useQuery(['product-type',price, name, origin, rating,panigate.page,panigate.limit ], fetchData)
  //  const productsType = fetchData()
  console.log("productsType", productsType);

  return (
    <div style={{ backgroundColor: "var(--background-color)" }}>
      <WrapperProductType className="grid">
        <WrapperNavbar span={4}>
          {/* <NavbarComp /> */}
            <NavbarHeader>BỘ LỌC TÌM KIẾM</NavbarHeader>
            
            <NavbarItem>
              <NavbarItemLable>Nơi bán</NavbarItemLable>
              <NavbarItemOrigin>
                <div>
                  <NavbarOriginRadio
                    type="radio"
                    value=""
                    checked={origin === ""}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                  All
                </div>
                <div>
                  <NavbarOriginRadio
                    type="radio"
                    value="Việt Nam"
                    checked={origin === "Việt Nam"}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                  Việt Nam
                </div>

                <div>
                  <NavbarOriginRadio
                    type="radio"
                    value="Mỹ"
                    checked={origin === "Mỹ"}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                  Mỹ
                </div>

                <div>
                  <NavbarOriginRadio
                    type="radio"
                    value="Vĩnh Phúc"
                    checked={origin === "Vĩnh Phúc"}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                  Vĩnh Phúc
                </div>
              </NavbarItemOrigin>
            </NavbarItem>

            <NavbarItem>
              <NavbarItemLable>Khoảng giá</NavbarItemLable>
             <div style={{display:"flex", justifyContent:"space-between",fontSize:"1.3rem"}}>
             <NavbarItemPrice
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                style={{ appearance: 'textfield'}}
              />
              -
              <NavbarItemPrice
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
             </div>
              <NavbarItemPriceBtn onClick={handleClickPrice}>ÁP DỤNG</NavbarItemPriceBtn>
              {/* <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}
            </NavbarItem>

            <NavbarItem>
              <NavbarItemLable>Đánh giá</NavbarItemLable>
              <NavbarItemSelect
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Chọn đánh giá</option>
                <option value="1">1 sao trở lên</option>
                <option value="2">2 sao trở lên</option>
                <option value="3">3 sao trở lên</option>
                <option value="4">4 sao trở lên</option>
                <option value="5">5 sao </option>
              </NavbarItemSelect>
            </NavbarItem>
        </WrapperNavbar>
        <Col span={20} style={{ backgroundColor: "#fff" }}>
          <WrapperProducts>
            {productsType
              ?.filter((product) => {
                if (searchDebounce === "") {
                  return product;
                } else if (
                  product?.name
                    ?.toLowerCase()
                    ?.includes(searchDebounce?.toLowerCase())
                ) {
                  return product;
                }
              })
              ?.map((productType, index) => {
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
                    id={productType._id}
                    trademark={productType.trademark}
                    origin={productType.origin}
                  />
                );
              })}
          </WrapperProducts>

          <Pagination
            defaultCurrent={panigate.page + 1}
            // total={panigate.totalPages}
            total={100}
            // pageSize={5}
            defaultPageSize={5}
            pageSizeOptions={[5, 10, 15]}
            onChange={onChange}
            style={{ textAlign: "center", padding: "20px 0" }}
          />
        </Col>
      </WrapperProductType>
    </div>
  );
};

export default TypeProductPage;
