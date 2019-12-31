import React, { useCallback } from "react";
import gql from "graphql-tag";
import "./upload.scss";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";
import { filesQuery, Files } from "./files";
// import { FileUploadService } from "../../../services/upload";

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export const Upload = props => {
  const [uploadFile] = useMutation(uploadFileMutation, {
    refetchQueries: [{ query: filesQuery }]
  });
  const onDrop = useCallback(
    ([file]) => {
      uploadFile({ variables: { file } });
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div id="zdrop" className="fileuploader">
        <div id="upload-label">
          <span className="title">Drag your Files here</span>
          <span>Some description here </span>
        </div>
      </div>
    </div>
  );
};
