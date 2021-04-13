import React from "react";

export default function UploadButton(props) {
  function openWidget() {
    
  }

  return (
    <>
      <input type="file" />
      <button id="upload-widget" className="btn btn-primary" onClick={() => console.log("Upload!!!")} type="submit" >Upload</button>
    </>
  )
}