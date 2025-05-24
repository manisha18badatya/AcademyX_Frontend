// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { OptionProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <OptionProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </OptionProvider>
    </AuthProvider>
  </React.StrictMode>
);
