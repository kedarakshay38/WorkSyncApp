import { Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function ProtectedRoute(){
const token =useAuth().token;

if(!token){
    return <Navigate to="/login" />
}
return <Outlet />
}
export default ProtectedRoute;