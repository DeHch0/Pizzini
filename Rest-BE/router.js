const app = require('express')();
const routers = require('./routes');


module.exports = (app) => {

    app.use('/home' , routers.homeRoutes)
    app.use('/products', routers.productRoutes);
    app.use('/user', routers.userRoutes);
    // app.use('/category', routers.categoryRouter);
}