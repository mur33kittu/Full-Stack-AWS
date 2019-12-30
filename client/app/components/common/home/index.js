import React, { useState } from "react";
import "./home.scss";
import { Upload } from "../upload/upload";
import { Files } from "../upload/files";

function Home(props) {  
  return (
    <>
      <Upload client={props} />
      <Files client={props} />
    </>
  );
}

export default Home;
