"use client";
import { useState } from "react";
import { Upload } from "keep-react-demo";

const UploadPendingComponent = () => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload
      onFileChange={handleFileChange}
      file={fileName}
      showProgressBar
      progressType="pending"
      progress={39}
      uploadTime="1 minutes left"
      id="upload_Pending"
    />
  );
};

const HorizontalUploadPending = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload
      onFileChange={handleFileChange}
      file={fileName}
      horizontal={true}
      showProgressBar={true}
      progressType="pending"
      progress={39}
      uploadTime="1 minutes left"
      id="horizontal_upload_pending"
    />
  );
};

export { HorizontalUploadPending, UploadPendingComponent };
