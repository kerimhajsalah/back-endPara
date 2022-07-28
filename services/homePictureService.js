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
    const url = req.body.url ;
    const id = req.body.id ;
    const pictures = await db.HomePicture.findAll();
    if(pictures.length<3){
        const homePicture = db.HomePicture.create({url : url });
    }
    else {
        const homePicture = await db.HomePicture.findByPk(id);
        await homePicture.update({url : url});
    }
    res.json({setted : "true"});
}
async function  getAllPictures(req,res){
   const picture = await db.HomePicture.findAll();
    res.status(200).send(picture);
}


module.exports= {
    create ,
    getAllPictures,
}