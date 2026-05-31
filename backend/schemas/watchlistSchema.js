const mongoose =require("mongoose");


const WatchListSchema = new mongoose.Schema(
    {
    name: String,
    price: Number,
    qty:Number,
    mode:String,
    }
);

module.exports = WatchListSchema;