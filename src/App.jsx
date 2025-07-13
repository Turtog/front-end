import { RouterProvider } from "react-router-dom";
import ServicosProvider from "./contexts/ServicosProvider.jsx";
import router from "./config/routes";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <ServicosProvider>
        <RouterProvider router={router} />
      </ServicosProvider>
    </AuthProvider>
  );
}

export default App;
