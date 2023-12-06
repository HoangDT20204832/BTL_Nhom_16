const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const MongoDBStore = require('connect-mongodb-session')(session)
const adminRoute = require('./src/routes/adminRoute')
const authRoute = require('./src/routes/authRoute')
const siteRoute = require('./src/routes/siteRoute')
const app = express();

dotenv.config()
const port = process.env.PORT || 3001

app.get('/', (req, res) =>{
    res.send({message: 'Hello World'})
})

const User = require('./src/models/userModel')

const store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/web-ban-hang',
    collection: 'sessions'
  })

app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false, store: store }))

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(adminRoute)
app.use(authRoute);
app.use(siteRoute);

app.use((req, res, next) => {
    if (!req.session.user) {
      return next()
    }
    User.findById(req.session.user._id)
      .then(user => {
        req.user = user;
        console.log(req.user)
        next()
      })
      .catch()
  })


//connect to MongoDB
const uri = 'mongodb://localhost:27017/web-ban-hang'
async function connect(){
    try {
        await mongoose.connect(uri)
        console.log("Connect to Mongoodb")
    } catch (err) {
        console.error(err)
    }
}
connect()

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))