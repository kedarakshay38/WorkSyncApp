import {useMemo} from "react";
import { mockTasks } from "../../services/mockData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
function TaskStatusChart() {
  const chartData = useMemo(
    () => [
      {
        name: "To Do",
        value: mockTasks.filter((t) => t.status === "todo").length,
      },
      {
        name: "In Progress",
        value: mockTasks.filter((t) => t.status === "inprogress").length,
      },
      {
        name: "Done",
        value: mockTasks.filter((t) => t.status === "done").length,
      },
    ],
    []
  ); //[] means it only recomputes once and recharts want data in[{name ,value}]

const COLORS = ["#facc15", "#a855f7", "#22c55e"]; // yellow, purple, green    
// ResponsiveContainer — makes the chart fill its parent container (needed since charts need explicit width/height)

return (  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Tasks by Status</h3>                                                                                                                                                                           
    <ResponsiveContainer width="100%" height={300}>                                                                                                                                                                                           
      <PieChart>                                                                                                                                                                                                                              
        <Pie                                                                                                                                                                                                                                  
          data={chartData}                                                                                                                                                                                                                    
          dataKey="value"                                                                                                                                                                                                                   
          nameKey="name"
          cx="50%"                                                                                                                                                                                                                            
          cy="50%"
          outerRadius={100}                                                                                                                                                                                                                   
          label                                                                                                                                                                                                                             
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />                                                                                                                                                                                         
          ))}                                                                                                                                                                                                                                 
        </Pie>                                                                                                                                                                                                                                
        <Tooltip />                                                                                                                                                                                                                           
        <Legend />                                                                                                                                                                                                                            
      </PieChart>
    </ResponsiveContainer>                                                                                                                                                                                                                    
  </div>  
)
}

export default TaskStatusChart;
