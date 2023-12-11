import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderItems: [
    ],
    shippingAddress: {                                          // giao hàng
        // fullName: { type: String, required: true },             //tên người nhận
        // address: { type: String, required: true },              //địa chỉ giao hàng
        // city: { type: String, required: true },                 //thành phố
        // phone: { type: Number, required: true },                //sdt của người nhận
    },
    paymentMethod: "",           //phương thức thanh toán
    itemsPrice: 0,              //tổng giá các sản phẩm
    shippingPrice: 0,           // phí giao hàng
    totalPrice: 0,             //tổng giá tiền cuối cùng của đơn hàng
    user: "",
    isPaid: false,                 // xác định đã thanh toán hay chưa
    paidAt: "",                                    //thời điểm thanh toán
    isDelivered: "",             // các đơn vị đã giao hàng hay chưa 
    deliveredAt: "",  
}

export const orderSlide = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderProduct: (state, action) =>{
        console.log("addOrderProduct", state, action)
        const {orderItem} = action.payload
        const itemOrder = state?.orderItems?.find((item) => item?.product === orderItem.product)
                         //kiểm tra xem có sản phẩm có idProduct có sẵn trong orderItems bằng với idProduct mình đã truyền lên khi ấn thêm vào giỏ hàng
                         //nếu có thì khi ấn thêm giỏ hàng thì số lượng sản phẩm trong order = số lượng sản phẩm đó có sẵn trong đơn hàng + số lượng sản phẩm vừa mới ấn vào nút thêm giỏ hàng
        if(itemOrder){
            itemOrder.amount = itemOrder.amount + orderItem?.amount //nếu sản phẩm ấn thêm giỏ hàng đã có sẵn trong đơn hàng thì sẽ + thêm với số sản phẩm vauwuf ấn thêm giỏ hàng
        }else{
            state.orderItems.push(orderItem)  //nếu sản phẩm ấn thêm giỏ hàng chưa có sẵn trong đơn hàng thì sẽ thêm nó vào đơn hàng
        }
    },

    increaseAmount : (state, action) =>{
        // console.log("remove", state, action)
        const {idProduct} = action.payload
        const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct) //lấy ra những sản phẩm trong đơn hàng ko có idProduct trùng với id của sản phẩm đã xóa
        // state.orderItems= itemOrder  //sửa so với video itemOrder thành state
        itemOrder.amount ++
    },
    
    decreaseAmount : (state, action) =>{
        // console.log("remove", state, action)
        const {idProduct} = action.payload
        const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct) //lấy ra những sản phẩm trong đơn hàng ko có idProduct trùng với id của sản phẩm đã xóa
        // state.orderItems= itemOrder  //sửa so với video itemOrder thành state
        itemOrder.amount --
    },

    removeOrderProduct: (state, action) =>{
        console.log("remove", state, action)
        const {idProduct} = action.payload
        const itemOrder = state?.orderItems?.find((item) => item?.product !== idProduct) //lấy ra những sản phẩm trong đơn hàng ko có idProduct trùng với id của sản phẩm đã xóa
        state.orderItems= itemOrder  //sửa so với video itemOrder thành state
    },
  },
})

// Action creators are generated for each case reducer function
export const { addOrderProduct} = orderSlide.actions

export default orderSlide.reducer 