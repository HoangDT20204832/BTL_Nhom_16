// const Product = require('../models/productModel')
// const Order = require('../models/orderModel')
// const User = require('../models/userModel')

// class SiteController {


//     addCart(req, res, next) {
//         const prodId = req.body.productId
//         const quantity = req.body.quantity
//         Product.findById(prodId)
//             .then(product => {
//                 console.log(req.user)
//                 return req.user.addToCart(product, quantity)
//             })
//             .then(result => {
//                 req.session.user = req.user
//                 return req.session.save(() => {
//                     res.json("thanh cong")
//                 })
//             })
//     }
// }

// module.exports = new SiteController()