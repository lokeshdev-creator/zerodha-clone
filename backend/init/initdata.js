require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const initdata = require("./data");
const url=process.env.MONGO_URL;

const HoldingModel = require("../model/HoldingsModel");
const OrdersModel=require("../model/OrdersModel");
const positionsModel=require("../model/positionsModel");
const WatchListModel = require("../model/WatchListModel");

main().then(()=>{
    console.log("connect to DB");
    initholdingdata();
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(url);
}

const initholdingdata=async()=>{
 try{
      await OrdersModel.deleteMany({});
       await positionsModel.deleteMany({});
     await HoldingModel.deleteMany({});
     await HoldingModel.insertMany(initdata.holdings);
     await OrdersModel.insertMany(initdata.watchlist);
     await positionsModel.insertMany(initdata.positions);
     await WatchListModel.insertOne({});
     console.log("data inserted successfully");
 }catch(err){
     console.log(err);
 }
}
