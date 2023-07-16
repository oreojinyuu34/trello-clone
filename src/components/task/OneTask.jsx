import React from "react";

export const OneTask = ({ task }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};
