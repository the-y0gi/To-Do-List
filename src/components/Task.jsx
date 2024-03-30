import React, { useState } from 'react';
import checkImg from '../assets/check.svg';
import deleteImg from '../assets/delete.svg';
import uncheckImg from '../assets/unchecked.svg';

// Task component
const Task = ({ title, description, deleteTask, index }) => {
  // State variables for completion status and checkbox image
  const [completed, setCompleted] = useState(false);
  const [checkedImage, setCheckedImage] = useState(false);

  // Function to handle checkbox click
  const handleCheckClick = () => {
    // Toggle completion status
    setCompleted(!completed);
    // Set checkbox image
    setCheckedImage(true);
  };

  // JSX
  return (
    <div className="task">
      <div className="line"></div>

      <div className="task-box">
        <div className="img-box">
          {/* Displaying checkbox image */}
          <img
            src={checkedImage ? checkImg : uncheckImg}
            alt="Check-Img"
            onClick={handleCheckClick}
          />
          <div className="text-box">
            {/* Task title */}
            <p
              className="p-title"
              onClick={() => {
                // Toggle completion status if task is not completed
                if (!completed) {
                  handleCheckClick();
                }
              }}
            >
              {title}
            </p>
            {/* Task description */}
            <span>{description}</span>
          </div>
        </div>
        {/* Delete button */}
        <img
          className="img-delete"
          onClick={() => deleteTask(index)}
          src={deleteImg}
          alt="Delete-Img"
        />
      </div>
    </div>
  );
};

export default Task;
