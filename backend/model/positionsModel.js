const mongoose = require("mongoose")

const positionsSchema = require("../schemas/positionsSchema");

const positionsModel = mongoose.model("position",positionsSchema);

module.exports = positionsModel;