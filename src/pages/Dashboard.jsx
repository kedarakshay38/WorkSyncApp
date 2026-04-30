import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import TaskStats from "../features/analytics/TaskStats";
import { mockTasks } from "../services/mockData";

function Dashboard() {
  const { user, logout } = useAuth();
  const recentTasks = mockTasks.slice(-3).reverse();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome back{user?.email ? `, ${user.email}` : ""}!
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Here's what's happening today
          </p>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 rounded border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <TaskStats />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Link
          to="/projects"
          className="bg-blue-600 text-white rounded-lg p-6 hover:bg-blue-700 transition-all hover:scale-[1.02]"
        >
          <h3 className="text-lg font-semibold">Projects</h3>
          <p className="text-sm opacity-90">Manage your projects</p>
        </Link>
        <Link
          to="/tasks"
          className="bg-purple-600 text-white rounded-lg p-6 hover:bg-purple-700 transition-all hover:scale-[1.02]"
        >
          <h3 className="text-lg font-semibold">Tasks</h3>
          <p className="text-sm opacity-90">View Kanban board</p>
        </Link>
        <Link
          to="/analytics"
          className="bg-green-600 text-white rounded-lg p-6 hover:bg-green-700 transition-all hover:scale-[1.02]"
        >
          <h3 className="text-lg font-semibold">Analytics</h3>
          <p className="text-sm opacity-90">See reports and charts</p>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Recent Tasks
        </h2>
        <div className="space-y-3">
          {recentTasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center pb-3 border-b dark:border-gray-700 last:border-0"
            >
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  {task.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {task.description}
                </p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
