import { Routes, Route } from "react-router-dom";
import Register from "../../LoginRegister/Register/Register";
import Main from "../Main/Main";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <Routes>

            {/* Home Page: */}
            <Route path="/main" element={<Main />} />
            <Route path="/register" element={<Register />} />

        </Routes>
    );
}

export default Routing;
