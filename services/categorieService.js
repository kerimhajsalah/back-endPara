const db = require("../models");

async function createCategorie(req, res){
    const name = req.body.name;
    const categorie = db.Categorie.create({name : name});
    res.json(categorie);
}
async function createSousCategorie(req, res){
    const name = req.body.name ;
    const categorie = req.body.categorieId;
    const sousCategorie = db.SousCategorie.create({name : name ,CategorieId : categorie})
    res.json(sousCategorie);
}
async function getAllCategories(req,res){
  const categories = await db.Categorie.findAll();
  res.json(categories);
}

async function getAllSousCategories(req,res){
    const sousCategorie = await db.SousCategorie.findAll();
    res.json(sousCategorie);
}

module.exports= {
    createCategorie,
    createSousCategorie,
    getAllCategories,
    getAllSousCategories
}