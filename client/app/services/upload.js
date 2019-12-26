const axios = require("axios");

function upload(file) {
  const formData = new FormData();
  formData.append("file", file);
  return axios
    .put("/api/upload", formData)
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

function getFiles() {
  return axios
    .get("/api/photos")
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

export const FileUploadService = {
  upload,
  getFiles
};
