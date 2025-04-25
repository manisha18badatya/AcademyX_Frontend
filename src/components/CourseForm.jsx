import React from 'react'

const CourseForm = () => {
    return (
      <form className="course-form">
        <label>Course Title</label>
        <input type="text" placeholder="Title here" />
  
        <label>Lesson Title</label>
        <input type="text" placeholder="Lesson title" />
  
        <div className="video-upload">Upload your videos here</div>
  
        <button className="add-lesson-btn">Add lesson +</button>
  
        <label>Description</label>
        <textarea placeholder="Write your description here"></textarea>
  
        <div className="inline-group">
          <label>Category</label>
          <input type="text" />
        </div>
  
        <div className="inline-group">
          <label>Pricing</label>
          <input type="text" />
        </div>
  
        <label>Tags</label>
        <input type="text" placeholder="Tags" />
      </form>
    );
  };
  
  export default CourseForm;
  