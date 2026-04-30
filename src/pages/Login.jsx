import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96 transition-colors"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Login
        </h1>
        <input
          type="email"
          className="w-full p-3 mb-4 border dark:border-gray-700 rounded outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full p-3 mb-4 border dark:border-gray-700 rounded outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 font-semibold transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
