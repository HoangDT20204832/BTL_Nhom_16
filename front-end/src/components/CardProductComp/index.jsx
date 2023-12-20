import React from "react";
// import "./styles.css";
import { Col, Rate } from "antd";
import styles from "./styles.module.css"
import clsx from "clsx";
import {
  StarFilled
} from '@ant-design/icons';

import {useNavigate} from "react-router-dom"
const CardProductComp = (props) => {
  const {countInStock,description,discount,image,name, priceOld,priceNew,rating,selled,
    trademark, origin, type,id} = props;

  const navigate = useNavigate()
  const handleDetailProduct = (id) =>{
    navigate(`/product-detail/${id}`)
  }
  return (

        <Col span={4} className={styles.cardProductWrap} 
             onClick={() => countInStock!== 0 && handleDetailProduct(id)}
              >         
<<<<<<< HEAD
          <div className={styles.productItemWrap} 
            style={{backgroundColor: countInStock ===0 ? "#ccc" : "#fff" }} >
            <img className={styles.productItemImg} src= {image} />
=======
<<<<<<< HEAD
          <a className={styles.productItemWrap} 
            style={{backgroundColor: countInStock ===0 ? "#ccc" : "#fff" }} >
            <img className={styles.productItemImg} src= {image}/>
=======
          <div className={styles.productItemWrap} 
            style={{backgroundColor: countInStock ===0 ? "#ccc" : "#fff" }} >
            <img className={styles.productItemImg} src= {image} />
>>>>>>> 3427d796e2ac7f912893cd8cb058a365504997a4
>>>>>>> af7818199995148691cc7717e48f1f14f6b72a01
            <h4 className={styles.productItemName}>
              {name}
            </h4>
            <div className={styles.productItemPrice}>
              <span className={styles.productItemPriceOld}>{priceOld?.toLocaleString()}đ</span>
              <span className={styles.productItemPriceCurrent}>{priceNew?.toLocaleString()}đ</span>
            </div>
            <div className={styles.productItemAction}>
              <div className={styles.productItemRating}>
                {/* <span className={styles.productItemStar}>{rating} <StarFilled /></span> */}
                <Rate className={styles.productItemStar} allowHalf disabled  defaultValue= {rating} value={rating} 
                  />
               
              </div>
              <span className={styles.productItemSold}>{selled} Đã bán</span>
            </div>

            <div className={styles.productItemOrigin}>
              <span className={styles.productItemBrand}>{trademark ||"Xmass" }</span>
              <div className={styles.productItemOriginName}>{origin || "Việt Nam"}</div>
            </div>
            <div className={styles.productItemFavourite}>
              <i className={clsx(styles.fasolid, styles.facheck)}></i>
              <span>Yêu thích</span>
            </div>
            <div className={styles.productItemSaleOff}>
              <div className={styles.productItemSaleOffPercent}>{discount}%</div>
              <div className={styles.productItemSaleOffLabel}>GIẢM</div>
            </div>
<<<<<<< HEAD
          </div>
=======
<<<<<<< HEAD
          </a>
=======
          </div>
>>>>>>> 3427d796e2ac7f912893cd8cb058a365504997a4
>>>>>>> af7818199995148691cc7717e48f1f14f6b72a01
        </Col>     
 

  );
};

export default CardProductComp;
