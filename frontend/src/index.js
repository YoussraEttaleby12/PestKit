import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
function App2() {
    return (
    <div>
    <App/>
     </div>
    );
    }
    root.render(<App2/>)