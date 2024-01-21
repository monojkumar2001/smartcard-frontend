import React, { useState } from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { LuImagePlus } from 'react-icons/lu';

const UserProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState([
    "/assets/images/dashboard/profile.jpg",
  ]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a preview image URL
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Your upload logic here
      console.log("Uploading file:", selectedFile);
    }
  };

  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="row mx-auto w-100 d-flex align-items-center justify-content-center">
          <div className="col-md-10">
            <div className="user-profile-wrapper">
              {/* <div className="user-profle-img">
                <img src="/assets/images/dashboard/profile.png" alt="" />
              </div> */}
              <div className="upload-btn-wrapper-img upload-btn-wrapper">
                <h4>Profile Picture</h4>
                {previewImage && (
                  <div className="user-img-items mb-3">
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                )}
                <button className="upload-btn" onClick={handleUpload}>
            
                  Upload Image
                </button>
                <input type="file" name="image" onChange={handleFileChange} />
              </div>
              <div className="user-profile-content-wrapper mt-3">
                <h3>Your Account</h3>
                <div className="form-input-item">
                  <label htmlFor="user_name">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="form-input-item">
                  <label htmlFor="user_email">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="form-input-item">
                  <label htmlFor="user_address">Your Address</label>
                  <input
                    type="text"
                    name="user_address"
                    id="user_address"
                    placeholder="Enter Your Address"
                    required
                  />
                </div>
                <div className="form-input-item">
                  <label htmlFor="user_phone_number">Your Number</label>
                  <input
                    type="number"
                    name="user_phone_number"
                    id="user_phone_number"
                    placeholder="Enter Your Number"
                    required
                  />
                </div>
                <div className="form-input-item">
                  <label htmlFor="user_details">Your Details</label>
                  <textarea
                    name="user_details"
                    id="user_details"
                    cols="30"
                    rows="5"
                    placeholder="Enter Your Details"
                  ></textarea>
                </div>

                <div className="mt-5">
                  <button className="custom-btn-alt w-100">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
UserProfilePage.layout = DashboardLayout;
export default UserProfilePage