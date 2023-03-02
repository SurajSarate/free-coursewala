require('dotenv').config();
var jwt = require('jsonwebtoken');
let secret=process.env.TOKEN_SECRET;


const fetchAdmin=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:"unathorized"})
    }
    try{
    const data=jwt.verify(token,secret);
        req.admin=data.admin;
    next();
    }catch(err){
        res.status(401).send({error:"unathorized"})
    }
}

module.exports=fetchAdmin;