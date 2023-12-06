const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    products:[
        {
            product:{type: Object, require:true},
            quantity:{type: Number, require:true}
        }
    ],
    user:{
        userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
    },
    totalPrice: {type:Number},
    status: {type:String, require:true},
    name: {type:String},
    phone:{type:String},
    address:{type:String},
    createdAt:{type: Date, default:Date.now}
})

module.exports = mongoose.model('Order', orderSchema)