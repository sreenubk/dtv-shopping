const res = require('express/lib/response');
const Product = require('../models/Product');


exports.getProducts = async (req,res,next) =>{
    try {
        const products = await Product.find();
        res.status(200).send({'success': true, 'data': products});
    } catch (error) {
        res.status(500).json({success:false, error:error})
    }

    // res.setHeader('content-type', 'applicaiton/json');
    // res.status(200).send(JSON.stringify({'success': true, 'data': products}));
};
exports.getProduct = async (req,res,next) =>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(200).json({sucess:false, data:'Rcord not found'})
        }
        res.status(200).json({sucess: true, data:product})
    } catch (error) {
        res.status(400).json({sucess:false, error:error})
    }
};
exports.putProduct = async (req,res,next) =>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators : true
        })
        if(!product){
            return res.status(400).json({succes:false, error: 'Record not found'})
        }
        res.status(200).json({success:true, data:product})
    } catch (error) {
        res.status(400).json({success:false, err: error})        
    }
};
exports.postProduct = async (req,res,next) => {
    try {
        const poduct = await Product.create(req.body);
        res.status(201).json({
            success: true,
            data: poduct
        })
    } catch (error) {
        res.status(400).json({ success : false, error: error})
    }

    
    
    // res.setHeader('content-type', 'application/json');
    // console.log(req.body);
    // res.status(200).send(JSON.stringify({'success': true, 'data': `Creating Product with ID ${JSON.stringify(req.body)}`}));
};
exports.deleteProduct = async (req,res,next) =>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product){
            return res.status(200).json({success:false, error: 'Record no Found'})
        }
        res.status(200).json({sucess:true, data:{}});
    } catch (error) {
        res.status(400).json({success:false, error:error});
    }
};