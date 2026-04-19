
import { createContext, useState } from "react";

const AuthContext= createContext(null);
export default AuthContext;

function AuthProvider({children}){
    const [user,setUser]= useState(null);

    const[token,setToken]=useState(localStorage.getItem('token'));

    function login(email,password){
    if(email && password)
    {
        const fakeToken="fake-jwt-token-12345";

        localStorage.setItem("token",fakeToken);
        setToken(fakeToken);
        setUser({email});

    }

}
function  logout(){
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);

}

return(
    <AuthContext.Provider value={{user,token,login,logout}}>
        {children}
    </AuthContext.Provider>

)
}

export { AuthProvider};

//js only allows one default exxport per file whci help to use any name we want  while importing  ex: import whatevername frpm"./Authcontext"
//in non default export at time of import we should match name exactly same in {} ex: import {AuthProvider} from "./Authontext"