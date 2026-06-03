import { createRoot } from "react-dom/client";
import App from "./App";
import { CountProvider } from "./context/Countcontext";



createRoot(document.getElementById("root")).render(
    <CountProvider>
        <App/>
    </CountProvider>
)