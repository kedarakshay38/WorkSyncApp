import { useState } from "react";


function CreateProjectModal({onClose,onSubmit}){

    const[name,setName]=useState("");
    const[description,setDescription]=useState("");

    function handleSubmit(e){

        e.preventDefault();
        onSubmit({name,description,status:"active",members:1,createdAt:new Date().toISOString().split("T")[0]});
        onClose();

    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Create Project</h2>
                <form onSubmit={handleSubmit}>
                    <input className="w-full p-3 mb-4 border rounded outline-none focus:border-blue-500"  type="text" placeholder="Project Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input className="w-full p-3 mb-4 border rounded outline-none focus:border-blue-500"  type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded border hover:bg-gray-100">Cancel</button>
                        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 ">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default  CreateProjectModal;