import React, { Component } from "react";
import "./home.scss";
import Upload from "../upload";
import Files from "../files";
import { FileUploadService } from "../../../services/upload";
import { ApolloConsumer } from "@apollo/react-hooks";
// import { Mutation } from "react-apollo";
// import gql from "graphql-tag";

// const UPLOAD_FILE = gql`
//   mutation SingleUpload($file: Upload!) {
//     singleUpload(file: $file) {
//       filename
//       mimetype
//       encoding
//     }
//   }
// `;

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      err: null
    };
    this.verifyUpload = this.verifyUpload.bind(this);
  }
  // componentDidMount() {
  //   this.getFiles();
  // }
  getFiles(client) {
    if (this.state.files.length === 0) {
      FileUploadService.getFiles(client)
        .then(files => {
          this.setState({ files: files.data.photos }, () => {
            // console.log(this.state.files)
            return <Files fileData={this.state.files} />;
          });
        })
        .catch(err => this.setState({ error: err }));
    }
  }

  renderFiles() {
    return <Files fileData={this.state.files} />;
  }

  verifyUpload(e) {
    // if (e === "success") {
    //   this.getFiles();
    // }
  }
  render() {
    return (
      <ApolloConsumer>
        {client => (
          <>
            <Upload checkFlag={this.verifyUpload} client={client} />;
            {this.getFiles(client)}
            {this.renderFiles()}
          </>
        )}
      </ApolloConsumer>
    );
  }
}
