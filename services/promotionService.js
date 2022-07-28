const db = require("../models");

async function createPromotion(req, res){
  const promotionSaved = await db.Promotion.findAll();
  const pourcentage = req.body.Pourcentage;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  if(promotionSaved.length>0){
   await promotionSaved[0].update({Pourcentage : pourcentage, startDate : startDate , endDate : endDate});
    res.json({updated : true});
  }
  else {
    db.Promotion.create({ Pourcentage : pourcentage, startDate : startDate , endDate : endDate });
    res.json({created : true});
  }
     
}
async function getPromotion(req,res){
  const Promotion = await db.Promotion.findAll();
  res.json(Promotion);
}

module.exports= {
    createPromotion,
    getPromotion
}