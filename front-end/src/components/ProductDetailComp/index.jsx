import { Col, Image, Row, InputNumber } from "antd";
import styles from "./styles.module.css";
import { PlusOutlined, MinusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import React from "react";

const ProductDetailComp = () => {
    const onChange = () => {};
    return (
        <Row className={styles.wrapp}>
            <Col span={10} className={styles.wrapImgProduct}>
                <Image
                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmmt7ajsywnz65"
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
                    Bộ máy tính để bàn PC Gaming + Màn hình 22inch FULL HD cấu
                    hình core i7, i5, i3 - Ram 8GB - SSD 120GB chiến game tốt
                </h1>
                <div>
                    <StarFilled className={styles.star} />
                    <StarFilled className={styles.star} />
                    <StarFilled className={styles.star} />
                    <StarFilled className={styles.star} />
                    <StarFilled />
                    <span className={styles.textSell}> | Da ban 1000+</span>
                </div>
                <div className={styles.priceProduct}>
                    <div className={styles.priceProductOld}>
                        <h1 className={styles.priceTextProductOld}>
                            10.000.000
                        </h1>
                        <span>đ</span>
                    </div>
                    <div className={styles.priceProductNew}>
                        <h1 className={styles.priceTextProductNew}>
                            5.000.000
                        </h1>
                        <span>đ</span>
                    </div>
                    <div className={styles.discoundProduct}>50% GIẢM</div>
                </div>
                <div className={styles.addressProduct}>
                    <span>Giao đến </span>
                    <span className={styles.address}>Quan Thanh Xuan</span> -
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
                            onClick={() => {}}
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
                            value={2}
                            size="small"
                        />
                        <button
                            style={{
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                            onClick={() => {}}
                        >
                            <PlusOutlined
                                style={{ color: "#000", fontSize: "20px" }}
                            />
                        </button>
                    </div>
                    <div className={styles.quantityProductAvailable}>
                        3992
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
