const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
// chứa tất cả API của chúng ta
const routes = (app)=>{
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
}

module.exports = routes