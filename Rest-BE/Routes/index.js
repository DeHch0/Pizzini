const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const {categoryRoutes} = require('./categoryRoutes');

module.exports= {
    homeRoutes: homeRoutes.homeRouter,
    userRoutes: userRoutes.userRouter,
    productRoutes: productRoutes.productRouter,
    categoryRoutes: categoryRoutes,
}