import React, { Component } from "react";
import Card from "../card";
import { FileUploadService } from "../../../services/upload";
const filePath = "uploads";
export default class Files extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      error: null
    };
  }

  componentDidMount() {
    FileUploadService.getFiles()
      .then(files => {
        this.setState({ files: files.data });
      })
      .catch(err => this.setState({ error: err }));
  }
  render() {
    return (
      <div className="flex-container">
        {this.state.files.length > 0 &&
          this.state.files.map(file => this.renderImage(file))}
      </div>
    );
  }

  renderImage(file) {
    return (
      <Card key={file.path.split("/")[1] + new Date().getMilliseconds()}>
        <img
          src={filePath + "/" + file.path.split("/")[1]}
          alt={
            file.path.split("/")[1] +
            new Date().getMilliseconds() +
            new Date().getSeconds()
          }
        />
        <div>{file.path.split("/")[1]}</div>
      </Card>
    );
  }
}
