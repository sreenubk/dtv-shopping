const express = require('express');

const {getOrders,getOrder, putOrder,postOrder,deleteOrder} = require('../controllers/orders')
const orderRouter = express.Router();

orderRouter.route('/').get(getOrders).put(putOrder);
orderRouter.route('/:id').post(postOrder).delete(deleteOrder);

module.exports=orderRouter;