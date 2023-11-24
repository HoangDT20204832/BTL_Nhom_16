const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const adminRoute = require('./src/routes/adminRoute')
const authRoute = require('./src/routes/authRoute')
const app = express();

dotenv.config()
const port = process.env.PORT || 3001

app.get('/', (req, res) =>{
    res.send({message: 'Hello World'})
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(adminRoute)
app.use(authRoute);


//connect to MongoDB
const uri = 'mongodb://localhost:27017/PR3'
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