import React from "react";
import styles from "./styles.module.css";
import ProductDetailComp from "../../components/ProductDetailComp";
const ProductPageDetail = () => {
    return (
        <div className={styles.wrapProductDetail}>
            <h4>Trang chủ</h4>
            <ProductDetailComp />
        </div>
    );
};

export default ProductPageDetail;
