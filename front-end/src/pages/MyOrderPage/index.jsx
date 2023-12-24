import React,{ useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import * as OrderService from '../../services/orderService'
import * as ReviewService from '../../services/reviewService'
import { useSelector } from 'react-redux';
import { WrapperItemOrder, WrapperListOrder, WrapperHeaderItem, WrapperFooterItem, WrapperContainer, WrapperStatus,
  ModalOverlay } from './style';
import ButtonComponent from '../../components/ButtonComp/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as message from '../../components/MessageComp/index'
import ReviewComponent from '../../components/ReviewComp';


const MyOrderPage = () => {
  const location = useLocation()
  const { state } = location
  const navigate = useNavigate()
  const fetchMyOrder = async () => {
    const res = await OrderService.getOrderByUserId(state?.id)
    return res.data
  }
  const user = useSelector((state) => state.user)
  const [isOpenReview, setIsOpenReview] = useState(false)
  const [productReview, setProductReview] = useState('')

  const queryOrder = useQuery({ queryKey: ['orders'], queryFn: fetchMyOrder }, {
    enabled: state?.id   // enabled trong useQuery giúp kiểm soát xem query nên tự động thực hiện hay không, dựa trên một điều kiện cụ thể
  })
  const { isLoading, data } = queryOrder
  const handleDetailsOrder = (id) => {
    navigate(`/details-order/${id}`
    // , {
    //   state: {
    //     token: state?.token
    //   }
    // }
    )
  }

  const mutation = useMutationHooks(
    (data) => {
      const { id , orderItems, userId } = data
      const res = OrderService.cancelOrder(id,orderItems, userId)
      return res
    }
  )

  const handleCanceOrder = (order) => {
    mutation.mutate({id : order._id, orderItems: order?.orderItems, userId: user.id }, {
      onSuccess: () => {
        queryOrder.refetch()
      },
    })
  }
  const { isSuccess: isSuccessCancel, isError: isErrorCancle, data: dataCancel } = mutation

  useEffect(() => {
    if (isSuccessCancel && dataCancel?.status === 'OK') {
      message.success("Hủy đơn hàng thành công")
    } else if(isSuccessCancel && dataCancel?.status === 'ERROR') {
      message.error(dataCancel?.message)
    }else if (isErrorCancle) {
      message.error()
    }
  }, [isErrorCancle, isSuccessCancel])

  const renderProduct = (data) => {
    return data?.map((order) => {
      return <WrapperHeaderItem key={order?._id}> 
              <img src={order?.image} 
                style={{
                  width: '70px', 
                  height: '70px', 
                  objectFit: 'cover',
                  border: '1px solid rgb(238, 238, 238)',
                  padding: '2px'
                }}
              />
              <div style={{
                width: 260,
                overflow: 'hidden',
                textOverflow:'ellipsis',
                whiteSpace:'nowrap',
                marginLeft: '10px'
              }}>{order?.name}</div>
              <span style={{ fontSize: '13px', color: '#242424',marginLeft: 'auto' }}>{(order?.priceNew)?.toLocaleString()}đ</span>
            </WrapperHeaderItem>
          })
  }

  //các code xử lý khi ấn vào button đã nhận hàng thì sẽ cập nhật lại thông tin đơn hàng
  const mutationUpdate = useMutationHooks(
    (data) => {
      console.log("haha", data)
      const res = OrderService.updateOrderDetails(data.id, data)
      return res
    }
  )
  const handlReceiveOrder = (order) =>{
    console.log("1704", order._id)
    mutationUpdate.mutate({orderId : order._id, isDelivered: true, isPaid: true }, {
      onSuccess: () => {
        queryOrder.refetch()
      },
    })     
  }

  const {data: dataUpdate} = mutationUpdate
  // console.log("dataUpdate", dataUpdate)

  useEffect(() => {
    if (dataUpdate?.status === 'OK') {
      message.success("Đã nhận hàng")
    }
  }, [dataUpdate?.status])


console.log("dataOrder", data)
//code xử lý đánh giá sanmr phẩm
  const handleReviewOrder = (order) =>{
      setIsOpenReview(true)
      setProductReview(order?.orderItems[0])
  }

  const closeReviewModal = ()=>{
    setIsOpenReview(false)
  }
  return (
    // <Loading isLoading={isLoading || isLoadingCancel}>
      <WrapperContainer>
        <div style={{height: '100%', width: '1270px', margin: '0 auto'}}>
          <h4>Đơn hàng của tôi</h4>
          <WrapperListOrder>
            {data?.map((order) => {
              return (
                <WrapperItemOrder key={order?._id}>
                  <WrapperStatus>
                    <span style={{fontSize: '14px', fontWeight: 'bold'}}>Trạng thái</span>
                    <div>
                      <span style={{color: 'rgb(255, 66, 78)'}}>Giao hàng: </span>
                      <span style={{color: 'rgb(90, 32, 193)', fontWeight: 'bold'}}>{`${order.isDelivered ? 'Đã giao hàng': 'Chưa giao hàng'}`}</span>
                    </div>
                    <div>
                      <span style={{color: 'rgb(255, 66, 78)'}}>Thanh toán: </span>
                      <span style={{color: 'rgb(90, 32, 193)', fontWeight: 'bold'}}>{`${order.isPaid ? 'Đã thanh toán': 'Chưa thanh toán'}`}</span>
                    </div>
                  </WrapperStatus>
                  {renderProduct(order?.orderItems)}
                  <WrapperFooterItem>
                    <div>
                      <span style={{color: 'rgb(255, 66, 78)'}}>Tổng tiền: </span>
                      <span 
                        style={{ fontSize: '13px', color: 'rgb(56, 56, 61)',fontWeight: 700 }}
                      >{(order?.totalPrice)?.toLocaleString()}đ</span>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                    {(order?.isDelivered &&  order?.isPaid)  &&  
                     <ButtonComponent
                        onClick={() => handleReviewOrder(order)}
                        size={40}
                        styleButton={{
                            height: '36px',
                            border: '1px solid #9255FD',
                            borderRadius: '4px',
                            background: "var(--active-color)"
                        }}
                        textButton={'Đánh giá'}
                        styleTextButton={{ color: 'var(--white-color)', fontSize: '14px' }}
                      >
                      </ButtonComponent>}

                    {/* nếu đơn hàng đã giao và đã thanh toán thì sẽ bỏ nút huy đơn hàng đi */}
                     {(order?.isDelivered ===false  || order?.isPaid === false)  &&  
                     <ButtonComponent
                        onClick={() => handleCanceOrder(order)}
                        size={40}
                        styleButton={{
                            height: '36px',
                            border: '1px solid #9255FD',
                            borderRadius: '4px'
                        }}
                        textButton={'Hủy đơn hàng'}
                        styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                      >
                      </ButtonComponent>}
                      <ButtonComponent
                        onClick={() => handlReceiveOrder(order)}
                        size={40}
                        styleButton={{
                            height: '36px',
                            border: '1px solid #9255FD',
                            borderRadius: '4px'
                        }}
                        textButton={'Đã nhận hàng'}
                        styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                      >
                      </ButtonComponent>
                      <ButtonComponent
                        onClick={() => handleDetailsOrder(order?._id)}
                        size={40}
                        styleButton={{
                            height: '36px',
                            border: '1px solid #9255FD',
                            borderRadius: '4px'
                        }}
                        textButton={'Xem chi tiết'}
                        styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                      >
                      </ButtonComponent>
                    </div>
                  </WrapperFooterItem>
                </WrapperItemOrder>
              )
            })}
          </WrapperListOrder>

        </div>
        { isOpenReview && <div>
          <ModalOverlay ></ModalOverlay>
          <ReviewComponent productReview={productReview} onClose={closeReviewModal} /></div>}

      </WrapperContainer>
    // </Loading>
  )
}

export default MyOrderPage