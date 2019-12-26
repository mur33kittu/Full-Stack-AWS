import React, { Component } from "react";
import Card from "../card";
import { FileUploadService } from "../../../services/upload";
const filePath = "../../../../../public/uploads";
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
      <div>
        <span>List of files: </span>
        {this.state.files.length > 0 &&
          this.state.files.map(file => this.renderImage(file))}
      </div>
    );
  }
  
  renderImage(file) {
    return (
      <Card
        name={file.path.split("/")[1]}
        path={filePath}
        key={
          file.path.split("/")[1] +
          Math.random()
            .toString(36)
            .substring(7)
        }
      />
    );
  }
}
