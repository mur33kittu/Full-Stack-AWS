import React, { useState } from "react";
import "./files.scss";
import gql from "graphql-tag";
import { FileUploadService } from "../../../services/upload";

export const filesQuery = gql`
  {
    files
  }
`;

export const Files = props => {
  const [files, setFiles] = useState(props.files || []);

  const getFiles = client => {
    FileUploadService.getFiles(client).then(res => {
      setFiles(res);
    });
  };

  getFiles(props.client);
  return (
    <div className="flex-container">
      {files.map(x => (
        <>
          <img
            style={{ width: 200 }}
            key={x.path + new Date().getMilliseconds() + Math.random() * 1000}
            src={`${x.path}`}
            alt={x}
          />
        </>
      ))}
    </div>
  );
};
