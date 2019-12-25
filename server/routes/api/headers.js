const Header = require("../../models/Header");

module.exports = app => {
  app.get("/api/headers", (req, res, next) => {
    Header.find()
      .exec()      
      .then(data => res.json(data))
      .catch(err => next(err));
  });
};
