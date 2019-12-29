import React, { Component } from "react";
import Card from "../card";
// import { FileUploadService } from "../../../services/upload";
const filePath = "uploads";
export default class Files extends Component {
  constructor(props) {
    // console.log('here');
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="flex-container">
        {this.props.fileData.length > 0 &&
          this.props.fileData.map(file => this.renderImage(file))}
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
