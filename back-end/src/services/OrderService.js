const Order = require("../models/OrderProduct");

const createOrder = (newOrder) => {
  return new Promise(async(resolve, reject) => {
    const {orderItems,  paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName,address, 
        city,phone,user} = newOrder;

    try {

      const newOrder = await Order.create({
        orderItems, 
        shippingAddress:{
            fullName,
            address, 
            city,
            phone
        },
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice, 
        user
      });
      if(newOrder){
        resolve({
            status: "OK",
            message: "SUCCESS",
            data: newOrder
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};


module.exports = {
    createOrder,

};
