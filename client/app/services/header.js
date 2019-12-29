import gql from "graphql-tag";

const body = gql`
  query {
    headers {
      key
      menuHref
      menuItem
    }
  }
`;

const getHeaders = client => {
  return client
    .query({ query: body })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

export const HeaderService = {
  getHeaders
};
