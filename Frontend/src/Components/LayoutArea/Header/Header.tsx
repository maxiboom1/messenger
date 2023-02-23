import { NavLink } from "react-router-dom";
import authService from "../../../Services/AuthService";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import "./Header.css";

function Header(): JSX.Element {
    function logout(): void {
        authService.logout();
        alert("Bye!");
        window.location.reload();
    }
    return (
        <div className="Header">
            <NavLink to="/" onClick={logout}>Logout</NavLink>
        </div>
    );
}

export default Header;
