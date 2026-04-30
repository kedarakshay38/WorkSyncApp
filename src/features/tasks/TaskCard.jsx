import { Draggable } from "@hello-pangea/dnd";
import { memo } from "react";

function TaskCard({ task, index }) {
  const priorityColor =
    task.priority === "high"
      ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
      : task.priority === "medium"
        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
        : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 mb-3 hover:shadow-md transition-all"
        >
          <h3 className="font-medium text-gray-800 dark:text-white mb-1">{task.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{task.description}</p>
          <div
            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${priorityColor}`}
          >
            {task.priority}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default memo(TaskCard);
