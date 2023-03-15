const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  image: {
    type: Array,
  },
  active: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Banner", BannerSchema);
