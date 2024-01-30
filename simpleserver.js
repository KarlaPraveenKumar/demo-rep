const express = require("express");
const app = express();

app.get("/health-check",function(req,res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyid = req.query.kidneyid;
  if((username != "praveen") || (password != "pass")){
    res.status(400).json({msg:"Something wrong with your inputs!"});
    if(kidneyid != 1 && kidneyid != 2){
      res.status(400).json({msg:"Something wrong with your inputs!"});
    }
  }
  res.json({msg : "Your kidney is safe!"});
});

app.listen(3000);
