import React from "react";
import { OneTask } from "./OneTask";

export const Tasks = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <OneTask task={task} />
        </div>
      ))}
    </div>
  );
};
