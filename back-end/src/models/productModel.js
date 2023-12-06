const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{type:String, require: true},
    description:{type:String, require: true},
    price:{type:Number, require: true},
    brand:{type:String, require:true},
    status:{type:String, require:true},
    category:{type:Schema.Types.ObjectId, ref:'Category', require:true},
    image:{type:Array, require: true},
    createdAt:{type:Date, default:Date.now},

})

module.exports = mongoose.model('Product', productSchema);