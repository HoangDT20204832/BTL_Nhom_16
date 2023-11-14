import React from "react";
// import "./styles.css";
import { Col } from "antd";
import styles from "./styles.module.css"
import clsx from "clsx";
import {
  StarFilled
} from '@ant-design/icons';
const CardProductComp = () => {
  return (

        <Col span={4} className={styles.cardProductWrap} >
          <a className={styles.productItemWrap} href="/">
            <img src="https://down-vn.img.susercontent.com/file/2e3f88b622de319e0a481941ef478411" className={styles.productItemImg} alt="" />
            <h4 className={styles.productItemName}>
              Bàn Phím Cơ Chơi Game FZ508 Pro Full Size 104 Phím
            </h4>
            <div className={styles.productItemPrice}>
              <span className={styles.productItemPriceOld}>1.400.000đ</span>
              <span className={styles.productItemPriceCurrent}>748.000đ</span>
            </div>
            <div className={styles.productItemAction}>
              <div className={styles.productItemRating}>
                <i className={styles.productItemStar}><StarFilled /></i>
                <i className={styles.productItemStar}><StarFilled /></i>
                <i className={styles.productItemStar}><StarFilled /></i>
                <i className={styles.productItemStar}><StarFilled /></i>
                <i className={styles.productItemStar}><StarFilled /></i>
              </div>
              <span className={styles.productItemSold}>88 Đã bán</span>
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
              <div className={styles.productItemSaleOffPercent}>47%</div>
              <div className={styles.productItemSaleOffLabel}>GIẢM</div>
            </div>
          </a>
        </Col>     
 

  );
};

export default CardProductComp;
