const Product = require('../models/productModel')
const User = require('../models/userModel')

class AdminController{

// [POST] Create Product
    async addProduct(req,res){
        const {name, description, price, thuong_hieu, product_type, tinh_trang} = req.body;
        const product = await Product.create({name, description, price, thuong_hieu, product_type, tinh_trang});
        res.status(200).json(product);
    }
// [GET] Get all product
    async getAllProduct(req,res){
        const products = await Product.find({});
        res.status(200).json(products)
    }

// [GET] find 1 product by Id
    async findProduct(req,res){
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
// [PUT] Update product
    async updateProduct(req,res){
        const product = await Product.updateOne({_id:req.params.id}, req.body);
        res.status(200).json(product);
    }
// [DELETE] delete product
    async deleteProduct(req,res){
        await Product.deleteOne({_id:req.params.id})
        res.send('delete success')
    }
// [PUT] Update info user
    async updateAcc(req,res){
        const user = await User.updateOne({_id:req.params.id}, req.body)
        res.status(200).json(user);
    }
// [DELETE] Delete user
    async deleteUser(req,res){
        await User.deleteOne({_id:req.params.id})
        res.send('delete success')
    }
// [GET] get all users
    async getAllUsers(req,res){
        const users = await User.find({});
        res.status(200).json(users)
    }
// [GET] find 1 user by Id
    async findUserById(req,res){
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }


}

module.exports = new AdminController()