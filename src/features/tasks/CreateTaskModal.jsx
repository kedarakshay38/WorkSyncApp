import { useState } from "react";

function CreateTaskModal({ onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, description, priority, status: "todo" });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          Create Task
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-3 mb-4 border dark:border-gray-700 rounded outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-3 mb-4 border dark:border-gray-700 rounded outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            value={priority}
            className="w-full p-3 mb-4 border dark:border-gray-700 rounded outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTaskModal;
