
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function useAuth()
{//custome hook so we use 'use' infront of function name
   let auth= useContext(AuthContext);
    
   return auth;
}

export default useAuth;