import gql from "graphql-tag";

const body = gql`
  query {
    photos {
      path
    }
  }
`;


const getFiles = props => {
  return props.client
    .query({ query: body })
    .then(res => {
      return Promise.resolve(res.data.photos);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};
export const FileUploadService = {
  getFiles
};
