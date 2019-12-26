import React, { Component } from "react";

import "./home.scss";
import Upload from "../upload";
import Files from "../files";

export default class Home extends Component {
  render() {
    return (
      <>
        <Upload />
        <Files />
      </>
    );
  }
}
