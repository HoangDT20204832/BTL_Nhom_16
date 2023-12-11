import { Checkbox,InputNumber } from 'antd'
import React, { useState } from 'react'
import { DeleteOutlined, MinusOutlined, PlusOutlined} from '@ant-design/icons'
import ButtonComponent from '../../components/ButtonComp/index';
import { useDispatch, useSelector } from 'react-redux';
// import { decreaseAmount, increaseAmount, removeAllOrderProduct, removeOrderProduct } from '../../redux/slides/orderSlide';
import styles from "./styles.module.css";
const OrderPage = () => {
  const order = useSelector((state) => state.order)
//   const [listChecked, setListChecked] = useState([])
//   const dispatch = useDispatch()
  const onChange = (e) => {
    // if(listChecked.includes(e.target.value)){
    //   const newListChecked = listChecked.filter((item) => item !== e.target.value)
    //   setListChecked(newListChecked)
    // }else {
    //   setListChecked([...listChecked, e.target.value])
    // }
    console.log(`checked = ${e.target.value}`)
  };

  const handleChangeCount = () => {
    // if(type === 'increase') {
    //   dispatch(increaseAmount({idProduct}))
    // }else {
    //   dispatch(decreaseAmount({idProduct}))
    // }
  }

//   const handleDeleteOrder = (idProduct) => {
//     dispatch(removeOrderProduct({idProduct}))
//   }

  const handleOnchangeCheckAll = (e) => {
    // if(e.target.checked) {
    //   const newListChecked = []
    //   order?.orderItems?.forEach((item) => {
    //     newListChecked.push(item?.product)
    //   })
    //   setListChecked(newListChecked)
    // }else {
    //   setListChecked([])
    // }
  }

//   const handleRemoveAllOrder = () => {
//     if(listChecked?.length > 1){
//       dispatch(removeAllOrderProduct({listChecked}))
//     }
//   }
console.log("order", order)
  return (
    <>
    {/* <div>OrderPage</div> */}
    <div className={styles.cartCompWrap} >
      <div className={styles.cartComp} >
        <div className={styles.headerCart}>
            <div>SHOP BÁN HÀNG</div>
            <div>GIỎ HÀNG </div>
        </div>

        <div className={styles.containerCart} >
          <div className={styles.containerCartLeft}>
            <div className={styles.containerCartLeftHeader}>
                <span style={{display: 'inline-block', width: '390px'}}>
                  {/* <Checkbox onChange={handleOnchangeCheckAll} checked={listChecked?.length === order?.orderItems?.length}></Checkbox> */}
                  <Checkbox onChange={handleOnchangeCheckAll} ></Checkbox>
                  <span> Tất cả ({order?.orderItems?.length} sản phẩm)</span>
                </span>
                <div style={{flex:1,display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <span>Đơn giá</span>
                  <span>Số lượng</span>
                  <span>Số tiền</span>
                  <DeleteOutlined style={{cursor: 'pointer'}} onClick={() =>{}}/>
                </div>
            </div>
            <div className={styles.containerCartLeftBody}>
              {order?.orderItems?.map((order) => {
                return ( 
                  <div className={styles.containerCartLeftItem}>
                <div style={{width: '350px', display: 'flex', alignItems: 'center', gap: 4}}> 
                  <Checkbox onChange={onChange} ></Checkbox>
                  {/* <Checkbox onChange={onChange} value={order?.product} checked={listChecked.includes(order?.product)}></Checkbox> */}
                  <img src={order?.image} style={{width: '77px', height: '79px', objectFit: 'cover'}}/>
                  <div className={styles.containerCartName}>{order?.name}</div>
                </div>
                <div className={styles.containerCartWrapPrice} >
                  <span className={styles.containerCartUnitPrice}>
                    <span className={styles.containerCartUnitPriceOld} >{order?.priceOld}đ</span>
                    <span className={styles.containerCartUnitPriceNew} >{order?.priceNew}đ</span>
                    <div className={styles.containerCartDiscount} >Giảm giá {order?.discount}%</div>
                  </span>
                  <div className={styles.containerCartLeftCount}>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount()}>
                        <MinusOutlined style={{ color: '#000', fontSize: '10px' }} />
                    </button>
                    <InputNumber defaultValue={order?.amount} value={order?.amount} size="small" />
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount()}>
                        <PlusOutlined style={{ color: '#000', fontSize: '10px' }} />
                    </button>
                  </div>
                  <span className={styles.containerCartLeftPrices} >{order?.priceNew * order?.amount}đ</span>
                  {/* <DeleteOutlined style={{cursor: 'pointer'}} onClick={() => handleDeleteOrder(order?.product)}/> */}
                  <DeleteOutlined style={{cursor: 'pointer'}}/>
                </div>
              </div>
                 ) 
               })} 
            </div>
          </div>
          <div className={styles.containerCartRight}>
            <div style={{width: '100%'}}>
              <div className={styles.containerCartRightInfor}>
                <div  className={styles.containerCartRightInforItem} >
                  <span>Tạm tính</span>
                  <span className={styles.containerCartRightInforPrice} >0</span>
                </div>
                <div className={styles.containerCartRightInforItem}>
                  <span>Giảm giá</span>
                  <span className={styles.containerCartRightInforPrice} >0</span>
                </div>
                <div className={styles.containerCartRightInforItem}>
                  <span>Thuế</span>
                  <span className={styles.containerCartRightInforPrice} >0</span>
                </div>
                <div className={styles.containerCartRightInforItem}>
                  <span>Phí giao hàng</span>
                  <span className={styles.containerCartRightInforPrice} >0</span>
                </div>
              </div>
              <div className={styles.containerCartRightTotal}>
                <span>Tổng tiền</span>
                <span style={{display:'flex', flexDirection: 'column'}}>
                  <span style={{color: 'rgb(254, 56, 52)', fontSize: '24px', fontWeight: 'bold'}}>0213</span>
                  <span style={{color: '#000', fontSize: '11px'}}>(Đã bao gồm VAT nếu có)</span>
                </span>
              </div>
            </div>
            <ButtonComponent
              // onClick={() => handleAddCard(productDetails, numProduct)}
              size={40}
              styleButton={{
                  background: 'rgb(255, 57, 69)',
                  height: '48px',
                  width: '220px',
                  border: 'none',
                  borderRadius: '4px'
              }}
              textButton={'Mua hàng'}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderPage;