import React, { Component } from "react";
// import upload from "../../../../public/assets/svg/upload1.svg";
import { FileUploadService } from "../../../services/upload";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.fileInputRef = React.createRef();
    this.onFilesAdded = this.onFilesAdded.bind(this);
  }

  onFilesAdded(evt) {
    const file = evt.target.files[0];
    FileUploadService.upload(file)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form encType="multipart/form-data">
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          onChange={this.onFilesAdded}
          multiple
        />
        <span>Upload Files</span>
      </form>
    );
  }
}
export default Upload;
