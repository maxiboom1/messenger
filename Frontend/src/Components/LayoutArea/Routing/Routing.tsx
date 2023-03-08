import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import "./Routing.css";
import Register from "../../AuthArea/Register/Register";

function Routing(): JSX.Element {
    return (
        
        <Routes>
            
            {/* Default Route: */}
            <Route path="/" element={<Navigate to="/main" />} />

            {/* Home Page: */}
            <Route path="/main" element= {<Main />} />
            
            {/* Login Page: */}
            <Route path="/login" element= {<Login />} />

            {/* Register Page: */}
            <Route path="/register" element= {<Register />} />

            {/* Login Page: */}
            <Route path="/chatroom" element= {<Profile />} />


        </Routes>
    );
}

export default Routing;
