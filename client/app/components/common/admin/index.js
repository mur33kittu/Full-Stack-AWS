import React, { Component } from "react";
import { Upload } from "../upload/upload";
import Card from "../card";

import "./admin.scss";
import { Files } from "../upload/files";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="flex-container">
        <Upload client={this.props.client} />
        <Files client={this.props} />
      </div>
    );
  }
}
