import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ServicoProvider } from "./contexts/ServicosProvider.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import router from "./config/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <ServicoProvider>
        <RouterProvider router={router} />
      </ServicoProvider>
    </AuthProvider>
  </StrictMode>
);
