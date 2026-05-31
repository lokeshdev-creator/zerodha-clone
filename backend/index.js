require('dotenv').config();

const HoldingsModel = require("./model/HoldingsModel");
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const bcrypt=require("bcrypt");

const positionsModel = require('./model/positionsModel');
const OrdersModel = require('./model/OrdersModel');
const WatchListModel = require('./model/WatchListModel');
const userModel = require('./model/userModel');
const jwt=require("jsonwebtoken");
const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings",async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  console.log(allHoldings);
  res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
  let allPositions = await positionsModel.find({});
  console.log(allPositions);
  res.json(allPositions);
});

app.get("/allOrders",async(req,res)=>{
  let allOrders = await WatchListModel.find({});
  console.log(allOrders);
  res.json(allOrders);
})

app.post("/newOrder",async(req,res)=>{
  let neworder = new WatchListModel({
    name:req.body.name.uid,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
    userId:req.body.userId
  });
 neworder.save();
});

//singup route
app.post("/singup",async(req,res)=>{
  let username=req.body.username;
  let user=await userModel.findOne({username})
  try{
     if(user){
      return res.status(400).json({message:"User already esixts!"})  
  } let newuser = new userModel(
      {
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
      }
    )
    newuser.save();
    const token =  jwt.sign({id:newuser._id},process.env.JWT_SECRET_KEY,{expiresIn:7*24*60*1000});
    res.json({token});
  }catch(err){
    console.log(err.message);
    res.status(500).send("Srever error");
    }
  });

//login route
  app.post("/login",async(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let user=await userModel.findOne({email});
    try{
      if(!user){
        return res.status(400).json({message:"user not exists!"})
      }else{
        console.log(user.password);
        console.log(password);
        if(!bcrypt.compare(password,user.password)){
          return res.json({message:"wrong password!"});
        }else{
          return res.status(200).json({message:"welcome back to zerodha!"})
        }
      }
    }catch(err){
      console.log(err.message);
      res.status(500).send("server error");
    }
  })


app.listen(PORT,async()=>{
    console.log("app started!");
   mongoose.connect(uri);
   console.log("database connected successfully");
});

