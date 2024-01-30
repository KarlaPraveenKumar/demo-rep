const express = require("express");
const app = express();

function usermiddleware(req,res,next){
  const username = req.headers.username;
  const password = req.headers.password;
  if((username != "praveen") || (password != "pass")){
    res.status(400).json({msg:"Something wrong with your inputs!"});
  }
  else{
    next();
  } 
}

function kidneymiddleware(req,res,next){
  const kidneyid = req.query.kidneyid;
  if(kidneyid != 1 && kidneyid != 2){
    res.status(400).json({msg:"Something wrong with your inputs!"});
  }
  else{
    next();
  }
}
// If we use app.use(expess.json()) then no need to use middle wares in side app.get
app.get("/health-check",usermiddleware,kidneymiddleware,function(req,res){
  res.status(200).json({msg:"Healthy!"});
});

//This is global cathecs, if there is any error below msg shows to the client.
app.use(function(err,req,res,next){
  res.status(500).json({msg: "Some thing wrong with the server"});
});

app.listen(3000);
