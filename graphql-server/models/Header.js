const mongoose = require("mongoose");

const HeaderSchema = new mongoose.Schema({
  key: {
    type: Number,
    default: 1
  },
  menuHref: {
    type: String,
    default: "/"
  },
  menuItem: {
    type: String,
    default: "Home"
  }
});

module.exports = mongoose.model('Header', HeaderSchema);
