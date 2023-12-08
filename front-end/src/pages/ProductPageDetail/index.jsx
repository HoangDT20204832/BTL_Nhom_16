import React from "react";
import styles from "./styles.module.css";
import ProductDetailComp from "../../components/ProductDetailComp";
import WrapperRatingComp from "../../components/WrapperRatingComp";
const ProductPageDetail = () => {
    return (
        <div className={styles.wrapProductDetail}>
            <div className="grid">
            <h4>Trang chủ</h4>
            <ProductDetailComp />
            <WrapperRatingComp />
            </div>
        
        </div>
    );
};

export default ProductPageDetail;
