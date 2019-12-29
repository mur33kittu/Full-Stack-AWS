var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var OtpSchema = new Schema({
  otpNumber: { type: Number },
  date: { type: Date }
});

module.exports = mongoose.model("otp", OtpSchema);
