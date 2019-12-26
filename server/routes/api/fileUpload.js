const Photo = require("../../models/Photo");
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/uploads");
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(res.end("Only images are allowed"), null);
    }
    callback(null, true);
  }
}).single("file");

module.exports = app => {
  app.put("/api/upload", upload, function(req, res) {
    // upload(req, res, function(err) {
    // console.log(req.file);
    if (req.file == undefined) {
      throw error;
    } else {
      var fullPath = "uploads/" + req.file.originalname;
      var document = {
        path: fullPath,
        caption: req.body.caption
      };

      var photo = new Photo(document);
      photo.save(function(error) {
        if (error) {
          throw error;
        }
      });
    }
    res.end("File is uploaded");
  });
  // });
};
