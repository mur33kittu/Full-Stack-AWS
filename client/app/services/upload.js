// const axios = require("axios");
import gql from "graphql-tag";

const body = gql`
  query {
    photos {
      path
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file) {
      fileName
      mimeType
      encoding
    }
  }
`;

const UPLOAD_FILE_STREAM = gql`
  mutation SingleUploadStream($file: Upload!) {
    singleUploadStream(file: $file) {
      fileName
      mimetype
      encoding
    }
  }
`;

const getFiles = client => {
  return client
    .query({ query: body })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

function upload(file, client) {
  const formData = new FormData();
  formData.append("file", file);
  const file1 = new Blob(["Foo."], { type: "text/plain" });
  file1.name = "bar.txt";
  // client.mutate({
  //   mutation: gql`
  //     mutation($file: Upload!) {
  //       uploadFile(file: $file) {
  //         success
  //       }
  //     }
  //   `,
  //   variables: { file1 }
  // })

  return client
    .mutate({
      mutation: gql`
        mutation($file: Upload!) {
          singleUploadStream(file: $file) {
            fileName
            mimeType
            encoding
          }
        }
      `,
      variables: { file }
    })
    .then(res => {
      console.log(res);
      return Promise.resolve(res);
    })
    .catch(err => {
      console.log(err);
      return Promise.reject(err);
    });
  // return axios
  //   .put("/api/upload", formData)
  //   .then(res => {
  //     return Promise.resolve(res);
  //   })
  //   .catch(err => {
  //     return Promise.reject(err);
  //   });
}

// function getFiles() {
//   return axios
//     .get("/api/photos")
//     .then(res => {
//       return Promise.resolve(res);
//     })
//     .catch(err => {
//       return Promise.reject(err);
//     });
// }

export const FileUploadService = {
  upload,
  getFiles
};
