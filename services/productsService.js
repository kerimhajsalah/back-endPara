const db = require("../models");
const product = require("../models/product");

function create(req, res){
    console.log("req.body",req.body)
    db.Product.create(req.body);
    res.status(200).send("user created");
}
async function  getAllProducts(req,res){
   const products = await db.Product.findAll();
    res.status(200).send(products);
}
async function getById ( req , res ){
    const product = await db.Product.findByPk(req.params.id);
    res.status(200).send(product);
}
async function getChecked ( req , res ){
    const products = await db.Product.findAll({where : {checked : true}});
    res.status(200).send(products);
}
async function updateById ( req , res ){
    const product = req.body;
    const newProduct =  await db.Product.findByPk(req.params.id);
    console.log("newProduct", newProduct);
    newProduct.update(product);
    res.status(200).send(newProduct);
}
module.exports= {
    create ,
    getAllProducts ,
    getById,
    updateById,
    getChecked
}