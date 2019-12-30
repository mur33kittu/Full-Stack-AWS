const Header = require("./models/Header");
const Photo = require("./models/Photo");
const { createWriteStream } = require("fs");
const path = require("path");

let files = [];

module.exports = {
  Query: {
    headers: async () => {
      const response = await Header.find().exec();
      return response;
    },
    photos: async () => {
      const response = await Photo.find().exec();
      return response;
    },
    files: () => files
  },
  Mutation: {
    uploadFile: async (_, { file }) => {
      const { createReadStream, filename } = await file;

      await new Promise(res =>
        createReadStream()
          .pipe(
            createWriteStream(
              path.join(__dirname, "../public/uploads", filename)
            )
          )
          .on("close", res)
      );
      const newFile = new Photo({ path: 'uploads/' + filename });
      newFile.save();
      files.push(filename);
      return true;
    }
  }
};
