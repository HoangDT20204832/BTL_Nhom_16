const User = require('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController{
    // [POST] Create User
    async postRegister(req,res){
        const {name, email, password} = req.body;
        const findUser = await User.findOne({email: email});
        if(!findUser){
            const user = await User.create({name, email, password});
            res.status(200).json(user);
        } else {
            res.send({message: "User exist"})
        }
    }
}

module.exports = new AuthController();