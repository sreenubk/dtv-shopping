const express = require('express');

const {getProducts,getProduct, putProduct,postProduct,deleteProduct} = require('../controllers/product')
const productRouter = express.Router();

productRouter.route('/').get(getProducts).post(postProduct);
productRouter.route('/:id').get(getProduct).put(putProduct).delete(deleteProduct);

module.exports=productRouter;