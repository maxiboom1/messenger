import { useEffect, useState } from "react";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import userService from "../../../Services/UserService";
import "./ControlPanel.css";

function ControlPanel(): JSX.Element {

    const [users, setUsers] = useState<UserModel[]>([]);
    useEffect(() => {
        userService.getAllUsers()
            .then((response) => setUsers(response))
            .catch(err => alert(err.message));
    }, []);
    console.log(users);
    console.log(authStore.getState().token);


    return (
        <div className="ControlPanel">
            Users Online:
            <div className="users-list">
                {/* get all users here
                click on username -> get messages
                click on userImage -> see user details

                if isOnline(false) -> hidden
                */}
            </div>
        </div>
    );
}

export default ControlPanel;
