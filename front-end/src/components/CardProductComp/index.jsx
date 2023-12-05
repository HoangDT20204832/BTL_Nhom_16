import React from "react";
// import "./styles.css";
import { Col } from "antd";
import styles from "./styles.module.css"
import clsx from "clsx";
import {
  StarFilled
} from '@ant-design/icons';
const CardProductComp = (props) => {
  const {countInStock,description,discount,image,name, priceOld,priceNew,rating,selled,type} = props;

  return (

        <Col span={4} className={styles.cardProductWrap} >
          <a className={styles.productItemWrap} href="/">
            <img src= {"https://down-vn.img.susercontent.com/file/f4e63d01771fa8d6b1f6d502cae38d82"} className={styles.productItemImg} alt="anhproduct" />
            <h4 className={styles.productItemName}>
              {name}
            </h4>
            <div className={styles.productItemPrice}>
              <span className={styles.productItemPriceOld}>{priceOld}đ</span>
              <span className={styles.productItemPriceCurrent}>{priceNew}đ</span>
            </div>
            <div className={styles.productItemAction}>
              <div className={styles.productItemRating}>
                <span className={styles.productItemStar}>{rating} <StarFilled /></span>
               
              </div>
              <span className={styles.productItemSold}>{selled} Đã bán</span>
            </div>

            <div className={styles.productItemOrigin}>
              <span className={styles.productItemBrand}>Whoo</span>
              <div className={styles.productItemOriginName}>Nhật Bản</div>
            </div>
            <div className={styles.productItemFavourite}>
              <i className={clsx(styles.fasolid, styles.facheck)}></i>
              <span>Yêu thích</span>
            </div>
            <div className={styles.productItemSaleOff}>
              <div className={styles.productItemSaleOffPercent}>{discount}%</div>
              <div className={styles.productItemSaleOffLabel}>GIẢM</div>
            </div>
          </a>
        </Col>     
 

  );
};

export default CardProductComp;
