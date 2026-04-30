import TaskStats from "../features/analytics/TaskStats";
import TaskStatusChart from "../features/analytics/TaskStatusChart";

function Analytics() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Analytics</h1>
      <div className="space-y-6">
        <TaskStats />
        <TaskStatusChart />
      </div>
    </div>
  );
}

export default Analytics;
