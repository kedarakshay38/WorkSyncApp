import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Providers from "./app/providers";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Providers>
          <AppRoutes />
        </Providers>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
