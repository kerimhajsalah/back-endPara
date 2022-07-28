const jwt = require('jsonwebtoken');

let secret = "it's_my_secret";

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  console.log("auth", authHeader)
  const token = authHeader

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, secret , (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)
    console.log("user",user);
    req.user = user

    next()
  })
}
module.exports =  {
    authenticateToken
}