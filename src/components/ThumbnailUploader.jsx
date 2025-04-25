import React from 'react'

const ThumbnailUploader = () => {
    return (
      <div className="card">
        <h3>Thumbnail</h3>
        <div className="thumbnail-box">
          <div className="thumbnail-upload">
            <span className="upload-icon">↑</span>
          </div>
          <button className="edit-btn">Edit</button>
        </div>
      </div>
    );
  };
  
  export default ThumbnailUploader;
  