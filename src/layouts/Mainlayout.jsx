
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

function MainLayout(){

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <NavBar />
                <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout;