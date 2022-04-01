import ReactDOM from "react-dom";
import { App2 } from "./App2";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

ReactDOM.render(
    <AdminFlagProvider>
        <App2 />
    </AdminFlagProvider>, 
    document.getElementById("root")
);


