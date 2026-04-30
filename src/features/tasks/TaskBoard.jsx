import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { mockTasks } from "../../services/mockData";
import TaskColumn from "./TaskColumn";
import CreateTaskModal from "./CreateTaskModal";

function TaskBoard() {
  const [tasks, setTasks] = useState(mockTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "inprogress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  function handleAddTask(newTask) {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, projectId: 1 }]);
  }

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const taskId = parseInt(draggableId);
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, status: destination.droppableId } : t
    );

    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Task
        </button>
      </div>
      {isModalOpen && (
        <CreateTaskModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddTask}
        />
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4">
          <TaskColumn title="To Do" tasks={todoTasks} droppableId="todo" />
          <TaskColumn
            title="In Progress"
            tasks={inProgressTasks}
            droppableId="inprogress"
          />
          <TaskColumn title="Done" tasks={doneTasks} droppableId="done" />
        </div>
      </DragDropContext>
    </>
  );
}

export default TaskBoard;
