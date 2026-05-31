const mongoose = require("mongoose");

const OrdersSchema = require("../schemas/orderSchema")


const OrdersModel = mongoose.models.Orders || mongoose.model("Orders", OrdersSchema);

module.exports = OrdersModel;

