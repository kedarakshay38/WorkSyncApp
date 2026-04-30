import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";

function TaskColumn({ title, tasks, droppableId }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex-1 transition-colors"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
            <span className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
              {tasks.length}
            </span>
          </div>
          <div className="min-h-32">
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TaskColumn;
