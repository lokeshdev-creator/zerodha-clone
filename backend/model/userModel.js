const mongoose=require("mongoose");
const userSchema=require("../schemas/UserSchema");

const userModel= mongoose.model("user",userSchema);

module.exports=userModel;