const db = require("../models");
const jwt = require("jsonwebtoken");
function signUp(req, res){
    db.User.create(req.body);
    res.status(200).send("user created");
}
let secret = "it's_my_secret";
async function signIn (req , res){
  try {
      console.log("thisIs a user")
    const user = await db.User.findOne({where : {email : req.body.email }})
    console.log("user" , user.password)
   console.log("reeq" , req)
    if (user && user.password == req.body.password){
        console.log("catched");
      const token =  jwt.sign({id : user.id , email : user.email }, secret, { expiresIn: '365d'}) ;
     if(user.email =="karimestgmail.com") {
      res.json({token : token, role : "admin",user:user.id })

     }
     else {
      res.json({token : token, role : "user",user:user.id })

    }
    }
  }  
  catch (error){
      console.log("error", error)
    res.status(500).send(error);
  }

}
async function getUser (req , res){
  try {
    const user = await db.User.findByPk(req.params.id)
    console.log("user" , user)

    if (user){
  
      res.json({user:user })
    }
  }  
  catch (error){
      console.log("error", error)
    res.status(500).send(error);
  }

}
async function bloquer(req,res){

  const user = await db.User.update({status : "not ok"},{where :{id : req.body.id}});
  console.log("useerFound", user);
  res.json({userUpdated : true});
}
async function debloquer(req,res){

  const user = await db.User.update({status : "Ok"},{where :{id : req.body.id}});
  console.log("useerFound", user);
  res.json({userUpdated : true});
}

async function getAllUsers(req, res){
  try {
    console.log("getAllUsers catched");
    const allUsers = await db.User.findAll();
    res.json(allUsers);
  }
  catch(error){
    res.status(500).send(error);
  }

}
module.exports= {
    signUp  ,
    signIn,
    getUser,
    getAllUsers,
    bloquer,
    debloquer
}