const Photo = require("../../models/Photo");

module.exports = app => {
  app.get("/api/photos", (req, res, next) => {
    Photo.find()
      .exec()
      .then(p => res.json(p))
      .catch(err => next(err));
  });
};
