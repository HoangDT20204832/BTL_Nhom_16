import { Col, Image, Row, InputNumber, Rate } from "antd";
import styles from "./styles.module.css";
import { PlusOutlined, MinusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComp/index";
import React, { useState } from "react";
import * as productService from "../../services/productService";
import * as reviewService from "../../services/reviewService";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addOrderProduct } from "../../redux/slides/orderSlide";
import { format } from 'date-fns';
const ProductDetailComp = ({ idProduct }) => {
  const navigate = useNavigate();
  const location = useLocation(); //để lấy ra pathname trong location(đường dẫn của trang productdetail)
  //để khi chưa đăng nhập mà ấn vào thêm giỏ hàng thì đăng nhập vào phát tự động dẫn tới link sản phẩm mua luôn
  const dispatch = useDispatch();
  const [numberProductBye, setNumberProductBye] = useState(1);

  const user = useSelector((state) => state.user);
  console.log("hi user: ", user);

  const onChange = (value) => {
    setNumberProductBye(value);
  };

  const handleChangeCount = (type, limited) => {
    if (type === "decrease") {
      if (!limited) {
        setNumberProductBye(numberProductBye - 1);
      }
    } else if (type === "increase") {
      if (!limited) {
        setNumberProductBye(numberProductBye + 1);
      }
    }
  };
  const fetchGetDetailProduct = async (context) => {
    // console.log("context", context);
    const id = context?.queryKey && context?.queryKey[1];
    if (id) {
      const res = await productService.getDetailProduct(id); //rowSelected: id sản phẩm
      // console.log("res", res)
      return res.data;
    }
  };

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname }); //truyền thêm state khi login
    } else {
      dispatch(
        addOrderProduct({
          orderItem: {
            name: productDetail?.name,
            amount: numberProductBye,
            image: productDetail?.image,
            priceOld: productDetail?.priceOld,
            priceNew: productDetail?.priceNew,
            discount: productDetail?.discount,
            product: productDetail?._id,
            countInStock: productDetail?.countInStock,
          },
        })
      );
    }
  };

  const { data: productDetail } = useQuery(
    ["product-detail", idProduct],
    fetchGetDetailProduct,
    { enabled: !!idProduct }
  );
  console.log("productDetail", productDetail);

  const fetchReviewProduct =async() =>{
    const res = await reviewService.getReviewsByProduct(idProduct)
    return res.data
  }
  const queryReiew = useQuery(['reviews'], fetchReviewProduct)
  const {data: dataReviews} = queryReiew
  console.log("dataReviews", dataReviews)
  
    // Tính trung bình rating
    const totalRating = dataReviews?.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = Number((dataReviews?.length > 0 ? totalRating / dataReviews?.length : 0).toFixed(1));
  return (
    <>
      <Row className={styles.wrapp}>
        <Col span={10} className={styles.wrapImgProduct}>
          <Image
            className={styles.imgBig}
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
          <h1 className={styles.nameProduct}>{productDetail?.name}</h1>
          <div>
            {/* <StarFilled className={styles.star} /> */}
            <Rate
              allowHalf
              disabled
              defaultValue={productDetail?.rating}
              value={averageRating}
            />
            <span className={styles.textSell}>
              {" "}
              | Đã bán {productDetail?.selled} sản phẩm
            </span>
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
            <div className={styles.discoundProduct}>
              {productDetail?.discount}% GIẢM
            </div>
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
                onClick={() =>
                  handleChangeCount("decrease", numberProductBye === 1)
                }
              >
                <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
              <InputNumber
                className={styles.inputNumber}
                onChange={onChange}
                defaultValue={1}
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
                onClick={() =>
                  handleChangeCount(
                    "increase",
                    numberProductBye === productDetail?.countInStock
                  )
                }
              >
                <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
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
                onClick={handleAddOrderProduct}
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
      <div className={styles.wrapperProductRating}>
        <div className={styles.wrapperProductRatingHeader}>
          ĐÁNH GIÁ SẢN PHẨM
        </div>
        <div className={styles.wrapperProductRatingBody}>
          <div className={styles.productRatingOverview}>
            <div className={styles.productRatingOverviewMedium}>
              <div>
                <span className={styles.productRatingOverviewMediumDetail}>
                  {averageRating}
                </span>
                <span className={styles.productRatingOverview5}> trên 5</span>
              </div>
              <Rate style={{ fontSize: "16px", color:"var(--active-color)" }} allowHalf disabled  defaultValue= {5} value={averageRating} />
            </div>
            <div className={styles.productRatingOverviewList}>
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "#fff",
                  height: "35px",
                  width: "105px",
                  border: "1px solid var(--background-color)",
                  borderRadius: "4px",
                }}
                textButton={"Tất cả"}
                styleTextButton={{
                  color: "var(--text-color)",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              />
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "#fff",
                  height: "35px",
                  width: "105px",
                  border: "1px solid var(--background-color)",
                  borderRadius: "4px",
                }}
                textButton={"5 Sao"}
                styleTextButton={{
                  color: "var(--text-color)",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              />{" "}
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "#fff",
                  height: "35px",
                  width: "105px",
                  border: "1px solid var(--background-color)",
                  borderRadius: "4px",
                }}
                textButton={"4 Sao"}
                styleTextButton={{
                  color: "var(--text-color)",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              />
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "#fff",
                  height: "35px",
                  width: "105px",
                  border: "1px solid var(--background-color)",
                  borderRadius: "4px",
                }}
                textButton={"3 Sao"}
                styleTextButton={{
                  color: "var(--text-color)",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              />
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "#fff",
                  height: "35px",
                  width: "105px",
                  border: "1px solid var(--background-color)",
                  borderRadius: "4px",
                }}
                textButton={"2 Sao"}
                styleTextButton={{
                  color: "var(--text-color)",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              />
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "#fff",
                  height: "35px",
                  width: "105px",
                  border: "1px solid var(--background-color)",
                  borderRadius: "4px",
                }}
                textButton={"1 Sao"}
                styleTextButton={{
                  color: "var(--text-color)",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              />
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "#fff",
                  height: "35px",
                  width: "105px",
                  border: "1px solid var(--background-color)",
                  borderRadius: "4px",
                }}
                textButton={"Có hình ảnh"}
                styleTextButton={{
                  color: "var(--text-color)",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              />
            </div>
          </div>

          <div className={styles.productRatingDetailsList}>
            {dataReviews?.map((dataReview) =>{
                const createdAtDate = new Date(dataReview?.createdAt);
                return (
                    <div className={styles.productRatingDetailsItem}>
                        <div className={styles.productRatingDetailsHeader}>
                            <img src={dataReview?.userId?.avatar}/>
                            <div>
                                <div>{dataReview?.userId?.name}</div>
                                <Rate style={{ fontSize: "14px", color:"var(--active-color)" }} allowHalf disabled  defaultValue= {5} value={dataReview?.rating} />
                            </div>
                        </div>
                        <div className={styles.productRatingDetailsBody}>
                            <div>Thời gian đánh giá:<span>{format(createdAtDate, 'dd/MM/yyyy HH:mm')}</span></div>
                            <div>Chất lượng sản phẩm:<span>đúng</span></div>
                            <div>Đúng với mô tả: <span>OK</span></div>
                            <div>{dataReview?.comment}</div>
                            {dataReview?.images?.map((image) => (
                              <img key={image._id} src={image.imageUrl} alt="Review" />
                            ))}
                        </div>
                    </div>
                )
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailComp;

// import React, { useEffect } from 'react';s
// import { useDispatch, useSelector } from 'react-redux';
// import ReviewComponent from './ReviewComponent';
// import { getReviewsByProduct } from '../services/reviewService';

// const ProductDetailComponent = ({ productId }) => {
//   const dispatch = useDispatch();
//   const reviews = useSelector((state) => state.reviews.reviews);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       const reviewsData = await getReviewsByProduct(productId);
//       dispatch({ type: 'SET_REVIEWS', payload: reviewsData });
//     };

//     fetchReviews();
//   }, [dispatch, productId]);

//   return (
//     <div>
//       {/* Hiển thị thông tin sản phẩm */}
//       <h2>Đánh giá và Bình luận</h2>
//       <ReviewComponent productId={productId} />

//       {/* Hiển thị đánh giá và bình luận */}
//       {reviews.map((review) => (
//         <div key={review._id}>
//           <p>{`Đánh giá: ${review.rating}`}</p>
//           <p>{`Bình luận: ${review.comment}`}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductDetailComponent;