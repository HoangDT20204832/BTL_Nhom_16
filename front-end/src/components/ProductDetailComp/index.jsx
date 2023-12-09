import { Col, Image, Row, InputNumber,Rate } from "antd";
import styles from "./styles.module.css";
import { PlusOutlined, MinusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComp/index";
import React, { useState } from "react";
import * as productService from "../../services/productService"
import {useQuery} from "@tanstack/react-query"
import {useSelector} from "react-redux"
const ProductDetailComp = ({idProduct}) => {
    const [numberProductBye, setNumberProductBye] = useState(1)

    const user = useSelector((state) => state.user)
    console.log("hi user: " + user)
    const onChange = (value) => {
        setNumberProductBye(value)
    };

    const handleChangeCount = (type) =>{
        if(type === "decrease"){
            setNumberProductBye(numberProductBye - 1)
        }else if(type === "increase") {
            setNumberProductBye(numberProductBye + 1)
        }
    }
    const fetchGetDetailProduct = async(context) => {
        console.log("context", context);
        const id = context?.queryKey && context?.queryKey[1]
        if(id){
            const res = await productService.getDetailProduct(id) //rowSelected: id sản phẩm
            console.log("res", res)
            return res.data
        }
    }

    const {data: productDetail} = useQuery(['product-detail', idProduct], fetchGetDetailProduct, {enabled: !!idProduct})
 console.log("productDetail", productDetail)
    
    return (
        <Row className={styles.wrapp}>
            <Col span={10} className={styles.wrapImgProduct}>
                <Image className={styles.imgBig}
                    src={productDetail?.image}
                    alt="img product"
                    preview={false}
                />
                <Row className={styles.wrapImgsSmall}>
                    <Col span={4} className={styles.imgSmall}>
                        <Image
                            src="https://down-vn.img.susercontent.com/file/sg-11134201-22110-snojb4c74gkvbf"
                            alt="img small "
                            preview={false}
                        />
                    </Col>
                    <Col span={4} className={styles.imgSmall}>
                        <Image
                            src="https://down-vn.img.susercontent.com/file/sg-11134201-22110-snojb4c74gkvbf"
                            alt="img small "
                            preview={false}
                        />
                    </Col>
                    <Col span={4} className={styles.imgSmall}>
                        <Image
                            src="https://down-vn.img.susercontent.com/file/sg-11134201-22110-snojb4c74gkvbf"
                            alt="img small "
                            preview={false}
                        />
                    </Col>
                    <Col span={4} className={styles.imgSmall}>
                        <Image
                            src="https://down-vn.img.susercontent.com/file/sg-11134201-22110-snojb4c74gkvbf"
                            alt="img small "
                            preview={false}
                        />
                    </Col>
                    <Col span={4} className={styles.imgSmall}>
                        <Image
                            src="https://down-vn.img.susercontent.com/file/sg-11134201-22110-snojb4c74gkvbf"
                            alt="img small "
                            preview={false}
                        />
                    </Col>
                </Row>
            </Col>

            <Col span={14} className={styles.productInfor}>
                <h1 className={styles.nameProduct}>
                    {productDetail?.name}
                </h1>
                <div>
                    {/* <StarFilled className={styles.star} /> */}
                    <Rate allowHalf defaultValue= {productDetail?.rating} value={productDetail?.rating} />
                    <span className={styles.textSell}> | Đã bán {productDetail?.selled} sản phẩm</span>
                </div>
                <div className={styles.priceProduct}>
                    <div className={styles.priceProductOld}>
                        <h1 className={styles.priceTextProductOld}>
                            {productDetail?.priceOld.toLocaleString()}
                        </h1>
                        <span>đ</span>
                    </div>
                    <div className={styles.priceProductNew}>
                        <h1 className={styles.priceTextProductNew}>
                            {productDetail?.priceNew.toLocaleString()}
                        </h1>
                        <span>đ</span>
                    </div>
                    <div className={styles.discoundProduct}>{productDetail?.discount}% GIẢM</div>
                </div>
                <div className={styles.addressProduct}>
                    <span>Giao đến </span>
                    <span className={styles.address}>{user?.address}</span> -
                    <span className={styles.changeAddress}>Đổi địa chỉ</span>
                </div>
                {/* <LikeButtonComponent
                     dataHref={ process.env.REACT_APP_IS_LOCAL 
                                ? "https://developers.facebook.com/docs/plugins/" 
                                : window.location.href
                            } 
                    /> */}
                <div
                    style={{
                        margin: "10px 0 20px",
                        padding: "10px 0",
                        borderTop: "1px solid #e5e5e5",
                        borderBottom: "1px solid #e5e5e5",
                    }}
                >
                    <div style={{ marginBottom: "10px", fontSize: "16px" }}>
                        Số lượng
                    </div>
                    <div className={styles.qualityProduct}>
                        <button
                            style={{
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                            onClick={() => handleChangeCount("decrease")}
                        >
                            <MinusOutlined
                                style={{ color: "#000", fontSize: "20px" }}
                            />
                        </button>
                        <InputNumber
                            className={styles.inputNumber}
                            onChange={onChange}
                            defaultValue={1}
                            max={10}
                            min={1}
                            value={numberProductBye}
                            size="small"
                        />
                        <button
                            style={{
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                            onClick={() => handleChangeCount("increase")}
                        >
                            <PlusOutlined
                                style={{ color: "#000", fontSize: "20px" }}
                            />
                        </button>
                    </div>
                    <div className={styles.quantityProductAvailable}>
                        {productDetail?.countInStock}
                        <span> sản phẩm có sẵn</span>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        aliggItems: "center",
                        gap: "12px",
                    }}
                >
                    <div>
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: "#fff",
                                height: "48px",
                                width: "220px",
                                border: "1px solid #ee4d2d",
                                borderRadius: "4px",
                            }}
                            onClick={() => {}}
                            textButton={"Thêm vào giỏ hàng"}
                            styleTextButton={{
                                color: "#ee4d2d",
                                fontSize: "15px",
                                fontWeight: "400",
                            }}
                        ></ButtonComponent>
                        {/* {errorLimitOrder && <div style={{color: 'red'}}>San pham het hang</div>} */}
                    </div>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: "rgb(255, 57, 69)",
                            height: "48px",
                            width: "220px",
                            border: "none",
                            borderRadius: "4px",
                        }}
                        textButton={"Mua ngay"}
                        styleTextButton={{
                            color: "#fff",
                            fontSize: "15px",
                            fontWeight: "600",
                        }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    );
};

export default ProductDetailComp;
