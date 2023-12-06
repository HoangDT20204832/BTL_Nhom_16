const Product = require('../models/productModel')
const Order = require('../models/orderModel')
const User = require('../models/userModel')

class SiteController {

    addToCart(product, quantity){
        const cartProductIndex = this.cart.items.findIndex(cp => {
            return cp.productId.toString() === product._id.toString()   // lấy chỉ mục sản phẩm 
        })
    
        let newQuantity = Number(quantity)
        const updatedCartItems = [...this.cart.items]  // kiểm soát số lượng và cập nhật giỏ hàng
    
        // cập nhật mảng 
        if (cartProductIndex >= 0) {
            newQuantity = this.cart.items[cartProductIndex].quantity + newQuantity
            updatedCartItems[cartProductIndex].quantity = newQuantity
    
        } else {
            updatedCartItems.push({
                quantity: newQuantity,
                productId: product._id,
            })
        }
        const updatedCart = {
            items: updatedCartItems
        }
        this.cart = updatedCart
        return this.save()
    }

    addCart(req, res, next) {
        const prodId = req.body.productId
        const quantity = req.body.quantity
        Product.findById(prodId)
            .then(product => {
                console.log(req.user)
                // return req.user.addToCart(product, quantity)
            })
            .then(result => {
                req.session.user = req.user
                return req.session.save(() => {
                    res.json("thanh cong")
                })
            })
    }

    index(req,res){{
        console.log(req.user)
    }}
}

module.exports = new SiteController()