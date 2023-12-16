const orderService = require("../services/OrderService");
const JwtService = require("../services/JwtService");
const createOrder = async (req, res) => {   
  try {
    console.log("req.body", req.body);
    const {orderItems, paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName,address, 
        city,phone,user} = req.body;
    if ( !paymentMethod || !itemsPrice || !shippingPrice || !totalPrice || !fullName || !address || 
        !city || !phone || !user) {
      return res.status(200).json({
        status: "Error",
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



module.exports = {
    createOrder,

};
