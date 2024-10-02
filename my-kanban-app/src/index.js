import React from "react";
import ReactDOM from "react-dom/client"; // Make sure this is importing from 'react-dom/client'
import App from "./App"; // Importing your main App component
import "./index.css"; // Global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
