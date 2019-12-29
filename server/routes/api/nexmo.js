const Nexmo = require("nexmo");
const Otp = require("../../models/otp");

const nexmo = new Nexmo({
  apiKey: "cea2033e",
  apiSecret: "f3gQQbpkYRFIIx06"
});

const from = "12406584840";

module.exports = app => {
  app.get("/api/sms", (req, res) => {
    // const toNumber = req.body.number;
    const otpNumber = Math.floor(100000 + Math.random() * 900000);
    const d = new Date();
    const otpDate =
      d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds();
    const otp = new Otp({ otpNumber: otpNumber, date: otpDate });
    otp
      .save()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    nexmo.message.sendSms(
      from,
      "+1 860 216 8580",
      "your OTP is " + otpNumber,
      { type: "unicode" },
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
    );
  });
};
