import React from "react";
import { OneTask } from "./OneTask";

export const Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <OneTask task={task} taskList={taskList} setTaskList={setTaskList} />
        </div>
      ))}
    </div>
  );
};
