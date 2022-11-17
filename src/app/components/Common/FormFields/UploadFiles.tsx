import React from "react";
import UploadIcon from "../../../assets/images/upload.png";
import { BiX } from "react-icons/bi";

const UploadFiles = ({
  field,
  label,
  name,
  id,
  value,
  showUrl,
  options,
  removeImage,
  form: { touched, errors },
  ...props
}: any) => {
  return (
    <>
      {label !== "" ? <p className="mb-2">{label}</p> : ""}
      {showUrl !== "" ? (
        <>
          <div className="preview_container">
            <img className="preview_image_" src={showUrl} />
            <button
              className="btn p-0 close_preview_img"
              title="Remove"
              onClick={removeImage}
            >
              <BiX color="#fff" />{" "}
            </button>
          </div>
        </>
      ) : (
        <div className="upload_parent">
          <input type="file" {...field} {...props} className="upload_custom" />{" "}
          <div className="cutom_design">
            <img src={UploadIcon} alt="" />
            <p className="mb-0">Upload File</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadFiles;
