                                                                                                                                                                                                import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./pages/Login/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  );
}
