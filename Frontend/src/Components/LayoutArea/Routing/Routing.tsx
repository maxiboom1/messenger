import { Routes, Route } from "react-router-dom";
import { authStore } from "../../../Redux/AuthState";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Register from "../../AuthArea/LoginRegister/Register/Register";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import "./Routing.css";

function Routing(): JSX.Element {

    return (
        <Routes>

            {/* default route */}
            <Route path="/" element={<Layout />} />

            {/* Home Page: */}
            {/* <Route path="/main" element={<Layout />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<AuthMenu />} />

        </Routes>
    );
}

export default Routing;
