import React,{ useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import * as OrderService from '../../services/orderService'
import { useSelector } from 'react-redux';
import { WrapperItemOrder, WrapperListOrder, WrapperHeaderItem, WrapperFooterItem, WrapperContainer, WrapperStatus } from './style';
import ButtonComponent from '../../components/ButtonComp/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as message from '../../components/MessageComp/index'

const MyOrderPage = () => {
  const location = useLocation()
  const { state } = location
  const navigate = useNavigate()
  const fetchMyOrder = async () => {
    const res = await OrderService.getOrderByUserId(state?.id)
    return res.data
  }
  const user = useSelector((state) => state.user)

  const queryOrder = useQuery({ queryKey: ['orders'], queryFn: fetchMyOrder }, {
    enabled: state?.id   // enabled trong useQuery giúp kiểm soát xem query nên tự động thực hiện hay không, dựa trên một điều kiện cụ thể
  })
  const { isLoading, data } = queryOrder

  const handleDetailsOrder = (id) => {
    navigate(`/details-order/${id}`    // Chuyen den Order Page
    // , {
    //   state: {
    //     token: state?.token
    //   }
    // }
    )
  }
  // Xu ly mutation hooks
  const mutation = useMutationHooks(
    (data) => {
      const { id , orderItems, userId } = data
      // const { id, token , orderItems, userId } = data
      const res = OrderService.cancelOrder(id,orderItems, userId)
      // const res = OrderService.cancelOrder(id, token,orderItems, userId)
      return res
    }
  )
    // Xu ly xoa Order
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
      </WrapperContainer>
    // </Loading>
  )
}

export default MyOrderPage