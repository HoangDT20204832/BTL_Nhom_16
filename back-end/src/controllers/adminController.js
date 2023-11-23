const Product = require('../models/productModel')

class AdminController{

// [POST] Create Product
    async addProduct(req,res){
        const {name, description, price} = req.body;
        const product = await Product.create({name, description, price});
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

}

module.exports = new AdminController()