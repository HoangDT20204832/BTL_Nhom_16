const User = require('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController{
    // [POST] Create User
    async postRegister(req,res){
        const {name, email, password} = req.body;
        const hashpw = await bcrypt.hash(password, 10)
        const findUser = await User.findOne({email: email});
        if(!findUser){
            const user = await User.create({name, email, password: hashpw});
            res.status(200).json(user);
        } else {
            res.send({message: "User exist"})
        }
    }

    async postLogin(req,res){
        const {email, password} = req.body;
        User.findOne({email: email})
            .then((user) => {
                if (!user) {
                    res.json({message: "loi"})
                }
                bcrypt
                    .compare(password, user.password)
                    .then((doMatch) => {
                        req.session.authenticated = true;
                        req.session.user = user;
                        return req.session.save(() => {
                            console.log(req.sessionID);
                            res.send(200)
                        })
                    })
            })
    }

    async postLogout(req,res){
        req.session.destroy(() =>{
            res.json("Ok")
        });
    }
}

module.exports = new AuthController();