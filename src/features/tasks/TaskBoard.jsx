import { useState } from "react";
import {mockTasks} from"../../services/mockData";
import TaskColumn from "./TaskColumn";
import CreateTaskModal from "./CreateTaskModal"
function TaskBoard(){
const [tasks,setTasks]=useState(mockTasks);
const [isModalOpen,setIsModalOpen]=useState(false);


const todoTasks=tasks.filter((t)=>t.status==="todo");
const inProgressTasks= tasks.filter((t)=>t.status==="inprogress")
const doneTasks=tasks.filter((t)=>t.status==="done");


function handleAddTask(newTask){

    setTasks([...tasks,{...newTask,id:tasks.length+1,projectId:1}])

}
return(
    <>
    <div className="flex justify-end mb-4">
    <button  onClick={()=>setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ New Task</button>
    </div>
    {isModalOpen &&(
        <CreateTaskModal 
        onClose={()=>setIsModalOpen(false)}

        onSubmit={handleAddTask}

         />
    )

    }
    <div className="flex gap-4">
<TaskColumn title="To do" tasks={todoTasks}></TaskColumn>
<TaskColumn title="In ptogress" tasks={inProgressTasks}></TaskColumn>
<TaskColumn title="Done" tasks={doneTasks}></TaskColumn>
    </div>

    </>
)
}

export default TaskBoard;