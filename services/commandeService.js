const db = require("../models");

// async function  create(req, res){
//     let object = req.body
//     console.log("this is object",object );
//     var products = [] 
//     object.products.forEach(element => {
//         for (var i=0 ; i < element.qty ; i++){
//             products.push(element.id);
//         }
//     });
//    const c= await db.Commande.create({adresse : object.commande.address ,
//     phone : object.commande.phone ,
//     lastName : object.commande.lastName ,
//     firstName : object.commande.firstName,
//     ProductId : products });
//     object.products.forEach(async element=>{
//         c.addProduct(element.id);
//     });
//     res.json({success :true})
// }
async function  create(req, res){
    let object = req.body
    console.log("object", object);
    var Product =[]
    var prix = 0;
    object.products.forEach(element => {
        for( let i =0 ; i < element.qty ; i++){
            Product.push(element.id);
            prix+=element.price
        }
    });
   const c= await db.Commande.create({adresse : object.commande.address , montant:prix , firstName:object.commande.firstName,
    lastName:object.commande.lastName, Phone: object.commande.phone ,status : "en attente" });
    object.products.forEach( async element => {
        const p = await db.Product.findByPk(element.id)
        db.CommandeProduct.create({CommandeId : c.id , ProductId : p.id , nb : element.qty})
    }); 
res.json({created: true});
}
async function  getAllCommandes(req,res){
   const commandes = await db.Commande.findAll();
    res.status(200).send(commandes);
}
async function validateCommande(req,res){
    const commande = await db.Commande.update({status : "valide"},{where :{id : req.body.id}});
    res.json(commande);
}
async function refuseCommande(req,res){
    const commande = await db.Commande.update({status : "non valide"},{where :{id : req.body.id}});
    res.json(commande);
}
async function getProductsByCommande(req,res){
    const commandeProducts = await db.CommandeProduct.findAll({where : {CommandeId : req.params.commandeId}});
    var products = [];
   await Promise.all(commandeProducts.map(async(value)=>{
     var p =   await db.Product.findByPk(value.dataValues.ProductId);
     p.dataValues.nb = value.dataValues.nb;
     console.log("produit",p);
     products.push(p);
    }))

   res.json({products});
}
module.exports= {
    create ,
    getAllCommandes,
    validateCommande,
    refuseCommande,
    getProductsByCommande
}