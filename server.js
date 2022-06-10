const dotenv = require('dotenv').config();
const colors = require('colors')
const express = require('express')
const orderRouter = require('./routes/orders')
const productRouter = require('./routes/product')
const morgan = require('morgan')
const mongoConnection = require('./config/db')

const app = express();
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}
// Plug in express body parser
app.use(express.json())
// Moute orders to app
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/product', productRouter);
mongoConnection();
const server = app.listen(process.env.SERVER_PORT, () => {console.log(`Shopping is opent at port : ${process.env.SERVER_PORT}`.bgRed)})
