const axios = require('axios');

export const Query = (query) => {
  console.log(query);
  axios({
        url: 'http://localhost:8080/graphql',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: query
        })
      })
        .then(response => {
          return response.json();
        })
        .then(responseAsJson => {
          if (responseAsJson.errors) {
            this.setState({
              loading: false,
              error: responseAsJson.errors[0],
              data: responseAsJson.data
            });
          } else {
            this.setState({
              loading: false,
              error: null,
              data: responseAsJson.data
            });
          }
        })
        .catch(error => {
          this.setState({ loading: false, error, data: null });
        });
}
