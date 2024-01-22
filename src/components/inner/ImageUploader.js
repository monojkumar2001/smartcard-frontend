// ImageUploader.js
import React, { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";

const ImageUploader = ({ handleCrop, croppedImage }) => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handleCropClick = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      // Pass the cropped image to the parent component
      handleCrop(canvas.toDataURL());
    }
  };

  return (
    <div>
      {/* Input for image upload */}

      <div className="upload-image-wrapper upload-image-border">
        <p>Choose image from templates or upload your own</p>
        <div className="row mt-4 d-flex justify-content-end">
          <div className="col-md-8 ">
            <div className=" business-image-con">
              <div className="view-image business-image">
                <img src={croppedImage} style={{ width: "200px" }} />
              </div>

              <div className="upload-input">
                <div
                  className="file-btn custom-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Upload
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="file-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AvatarEditor component */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {image && (
                <div>
                  <AvatarEditor
                    ref={editorRef}
                    image={image}
                    width={350}
                    height={250}
                    border={50}
                    color={[58, 52, 86, 0.95]} // RGBA values
                    scale={scale}
                  />
                  <div>
                    <label>Zoom:</label>
                    <input
                      type="range"
                      min="1"
                      max="2"
                      step="0.01"
                      value={scale}
                      onChange={handleScaleChange}
                    />
                  </div>
                  <button onClick={handleCropClick} data-bs-dismiss="modal">
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
