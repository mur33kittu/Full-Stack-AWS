const Header = require("./models/Header");
const Photo = require("./models/Photo");
const fs = require('fs');
module.exports = {
  Query: {
    headers: async () => {
      const response = await Header.find().exec();
      return response;
    },
    photos: async () => {
      const response = await Photo.find().exec();
      return response;
    }
  },
  Mutation: {
    singleUpload: (parent, args) => {
      return args.file.then(file => {
        const { createReadStream, filename, mimetype } = file;

        const fileStream = createReadStream(`./public/uploads/`);

        fileStream.pipe(fs.createWriteStream(`./public/uploads/${filename}`));

        return file;
      });
    },
    singleUploadStream: async (parent, args) => {
      const file = await args.file;
      const { createReadStream, filename, mimetype } = file;
      const fileStream = createReadStream();

      //Here stream it to S3
      // Enter your bucket name here next to "Bucket: "
      const uploadParams = {
        Bucket: "apollo-file-upload-test",
        Key: filename,
        Body: fileStream
      };
      const result = await s3.upload(uploadParams).promise();

      console.log(result);

      return file;
    }
  }
};
