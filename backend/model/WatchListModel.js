const mongoose = require("mongoose");
const WatchListSchema = require("../schemas/watchlistSchema");

const WatchListModel = mongoose.model("watchlist",WatchListSchema);

module.exports = WatchListModel;