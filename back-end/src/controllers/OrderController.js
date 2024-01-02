const orderService = require("../services/OrderService");
const JwtService = require("../services/JwtService");
// hàm xử lý khi một yêu cầu POST được gửi đến endpoint tương ứng để tạo một đơn đặt hàng mới.//
const createOrder = async (req, res) => {   
  try {
    console.log("req.body", req.body);
    const {orderItems, paymentMethod,deliveryMethod, itemsPrice, shippingPrice, totalPrice, fullName,address, 
        city,phone,user} = req.body;
    if ( !paymentMethod ||!deliveryMethod|| !itemsPrice  || !totalPrice || !fullName || !address || 
        !city || !phone || !user) {
      return res.status(200).json({
        status: "ERROR",
        message: "Bạn cần điền đầy đủ thông tin",
      });
    } 
    

    const response = await orderService.createOrder(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
// Hàm xử lý yêu cầu GET để lấy chi tiết của một đơn đặt hàng//
const getDetailsOrder = async (req, res) => {
  try {
      const orderId = req.params.id
      if (!orderId) {
          return res.status(200).json({
              status: 'ERROR',
              message: 'The userId is required'
          })
      }
      const response = await orderService.getOrderDetails(orderId)
      return res.status(200).json(response)
  } catch (e) {
      // console.log(e)
      return res.status(404).json({
          message: e
      })
  }
}
//Hàm xử lý yêu cầu GET để lấy chi tiết của tất cả các đơn đặt hàng//
const getAllOrderDetails = async (req, res) => {
  try {
      const userId = req.params.id
      if (!userId) {
          return res.status(200).json({
              status: 'ERR',
              message: 'The userId is required'
          })
      }
      const response = await orderService.getAllOrderDetails(userId)
      return res.status(200).json(response)
  } catch (e) {
      // console.log(e)
      return res.status(404).json({
          message: e
      })
  }
}
//Hàm xử lý yêu cầu POST để hủy chi tiết một đơn đặt hàng.//
const cancelOrderDetails = async (req, res) => {
  try {
      const data= req.body.orderItems
      const orderId= req.body.orderId
      if (!orderId) {
          return res.status(200).json({
              status: 'ERROR',
              message: ' orderId là bắt buộc'
          })
      }
      const response = await orderService.cancelOrderDetails(orderId, data)
      return res.status(200).json(response)
  } catch (e) {
      // console.log(e)
      return res.status(404).json({  
          message: e
      })
  }
}

// Hàm xử lý yêu cầu PUT để cập nhật chi tiết của một đơn đặt hàng//
const updateOrderDetails = async (req, res) => {
    try {
        const data= req.body
        const {orderId, ...rest} = data
        if (!orderId) {
            return res.status(200).json({
                status: 'ERROR',
                message: ' orderId là bắt buộc'
            })
        }
        const response = await orderService.updateOrderDetails(orderId, rest)
        return res.status(200).json(response)
    } catch (e) {
        // console.log(e)
        return res.status(404).json({  
            message: e
        })
    }
  }
// Hàm xử lý yêu cầu GET để lấy tất cả các đơn đặt hàng trong hệ thống//
const getAllOrder = async (req, res) => {
  try {
      const data = await orderService.getAllOrder()
      return res.status(200).json(data)
  } catch (e) {
      // console.log(e)
      return res.status(404).json({
          message: e
      })
  }
}


module.exports = {
    createOrder,
    getDetailsOrder,
    getAllOrderDetails,    
    cancelOrderDetails,
    updateOrderDetails,
    getAllOrder
};
