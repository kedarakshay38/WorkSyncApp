import { mockTasks, mockProjects } from "../../services/mockData";

function StatCard({ label, value, colorClass }) {
  return (
    <div className={`${colorClass} rounded-lg p-4 shadow`}>
      <p className="text-sm opacity-80">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function TaskStats() {
  const totalTasks = mockTasks.length;
  const todoCount = mockTasks.filter((t) => t.status === "todo").length;
  const inProgressCount = mockTasks.filter((t) => t.status === "inprogress").length;
  const doneCount = mockTasks.filter((t) => t.status === "done").length;
  const totalProjects = mockProjects.length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <StatCard
        label="Total Projects"
        value={totalProjects}
        colorClass="bg-indigo-100 text-indigo-700"
      />
      <StatCard
        label="Total Tasks"
        value={totalTasks}
        colorClass="bg-blue-100 text-blue-700"
      />
      <StatCard
        label="To Do"
        value={todoCount}
        colorClass="bg-yellow-100 text-yellow-700"
      />
      <StatCard
        label="In Progress"
        value={inProgressCount}
        colorClass="bg-purple-100 text-purple-700"
      />
      <StatCard
        label="Done"
        value={doneCount}
        colorClass="bg-green-100 text-green-700"
      />
    </div>
  );
}

export default TaskStats;
