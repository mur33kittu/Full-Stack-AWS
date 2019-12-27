import React, { Component } from "react";
// import upload from "../../../../public/assets/svg/upload1.svg";
import { FileUploadService } from "../../../services/upload";
import "./upload.scss";
import BreadCrums from "../crumbs";
import Spinner from "../spinner";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.fileInputRef = React.createRef();
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.state = {
      alert: "success",
      message: "",
      alert: -1
    };
  }

  onFilesAdded(evt) {
    this.setState({ alert: 0 });
    const file = evt.target.files[0];
    FileUploadService.upload(file)
      .then(() => {
        this.setState({
          alert: "success",
          message: file.name + " uploaded successfully",
          alert: 1
        });
      })
      .catch(err =>
        this.setState({
          alert: "error",
          message: file.name + " not uploaded" + " " + JSON.stringify(err),
          alert: 2
        })
      );
  }

  render() {
    return (
      <div className="upload-btn-wrapper">
        <button className="btn">Upload a file</button>
        <input
          ref={this.fileInputRef}
          type="file"
          name="myfile"
          onChange={this.onFilesAdded}
        />
        {this.state.alert === 0 ? (
          <Spinner />
        ) : (
          <BreadCrums crumbData={this.state} />
        )}
      </div>
    );
  }
}
export default Upload;
