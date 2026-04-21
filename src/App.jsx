import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import Providers from "./app/providers";
function App() {
  return (
    <AuthProvider>
      <Providers>
        <AppRoutes />
      </Providers>
    </AuthProvider>
  );
}

export default App;
