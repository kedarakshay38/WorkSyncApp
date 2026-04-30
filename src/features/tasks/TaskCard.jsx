import { Draggable } from "@hello-pangea/dnd";
import { memo } from "react"
function TaskCard({ task, index }) {
  const priorityColor =
    task.priority === "high"
      ? "bg-red-100 text-red-700"
      : task.priority === "medium"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-green-100 text-green-700";
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-lg shadow p-4 mb-3 hover:shadow-md transition-shadow"
        >
          <h3 className="font-medium text-gray-800 mb-1">{task.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{task.description}</p>
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
export default  memo(TaskCard);
