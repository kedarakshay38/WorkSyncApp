
import {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    let {login}= useAuth();
    let navigate= useNavigate();
    
    function handleSubmit(e){
        e.preventDefault();
        login(email,password);
        navigate("/")

    }
   
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <input type="email" className="w-full p-3 mb-4 border rounded outline-none focus:border-blue-500" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="email"/>
            <input type="password" className="w-full p-3 mb-4 border rounded outline-none focus:border-blue-500" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
            <button  type="submit"  className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700 font-semibold">Submit</button>
        </form>
        </div>
    )
}

export default Login;