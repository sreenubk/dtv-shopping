
const orders =[
    {id:1, text:'Wake up Early'},
    {id:2, text:'No Procrastination'},
    {id:3, text:'Learn a new thing'},
    {id:4, text: 'Watch stocks'},
    {id:5, text: 'Check mails'},
    {id:6, text: 'Make Friends'},
    {id:7, text: 'Just work'}

];

exports.getOrders = (req,res,next) =>{
    res.setHeader('content-type', 'applicaiton/json');
    res.status(200).send(JSON.stringify({'success': true, 'data': orders}));
};
exports.getOrder = (req,res,next) =>{
    res.setHeader('content-type', 'applicaiton/json');
    res.status(200).send(JSON.stringify({'success': true, 'data': `Sending order with ID: ${req.params.id}`}));
};
exports.putOrder = (req,res,next) =>{
    res.setHeader('content-type', 'applicaiton/json');
    res.status(200).send(JSON.stringify({'success': true, 'data': `Creating Order : ${req.body}`}));
};
exports.postOrder = (req,res,next) =>{
    res.setHeader('content-type', 'applicaiton/json');
    res.status(200).send(JSON.stringify({'success': true, 'data': `Updating Order with ID: ${req.params.id}`}));
};
exports.deleteOrder = (req,res,next) =>{
    res.setHeader('content-type', 'applicaiton/json');
    res.status(200).send(JSON.stringify({'success': true, 'data': `Delted Oder with ID: ${req.params.id}`}));
};