import React, { Component } from "react";
import "./home.scss";
import Upload from "../upload";
import Files from "../files";
import { FileUploadService } from "../../../services/upload";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      err: null
    };
    this.verifyUpload = this.verifyUpload.bind(this);
  }
  componentDidMount() {
    this.getFiles();
  }
  getFiles() {
    FileUploadService.getFiles()
      .then(files => {
        this.setState({ files: files.data });
      })
      .catch(err => this.setState({ error: err }));
  }
  verifyUpload(e) {
    if (e === "success") {
      this.getFiles();
    }
  }
  render() {
    return (
      <>
        <Upload checkFlag={this.verifyUpload} />
        <Files fileData={this.state} />
      </>
    );
  }
}
