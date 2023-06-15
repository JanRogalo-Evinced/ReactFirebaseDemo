import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "./Components/Hello";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Hello />
    </React.StrictMode>
);
