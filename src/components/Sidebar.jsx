import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="sidebar w-64 bg-gray-900 text-white h-screen p-4">
      <h1>Sidebar</h1>
      <nav>
        <ul>
          <li
            className="block py-2 px-3 rounded hover:bg-gray-700" >
            <Link to="/">Dashboard</Link>
          </li>
          <li className="block py-2 px-3 rounded hover:bg-gray-700">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="block py-2 px-3 rounded hover:bg-gray-700">
            <Link to="/tasks">Tasks</Link>
          </li>
          <li className="block py-2 px-3 rounded hover:bg-gray-700">
            <Link to="/chat">Chat</Link>
          </li>
          <li className="block py-2 px-3 rounded hover:bg-gray-700">
            <Link to="/analytics">Analytics</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
