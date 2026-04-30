import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import ProtectedRoute from "./ProtectedRoute";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Projects = lazy(() => import("../pages/Projects"));
const Tasks = lazy(() => import("../pages/Tasks"));
const Chat = lazy(() => import("../pages/Chat"));
const Analytics = lazy(() => import("../pages/Analytics"));
const Login = lazy(() => import("../pages/Login"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="chat" element={<Chat />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
