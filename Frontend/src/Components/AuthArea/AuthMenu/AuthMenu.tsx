import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./AuthMenu.css";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";

function AuthMenu(): JSX.Element {
    
    const [user,setUser] = useState<UserModel>();
    useEffect(() => {

        setUser(authStore.getState().user);

        const unsubscribe = authStore.subscribe(()=>{
            setUser(authStore.getState().user); 
        });

        return () => unsubscribe();

    },[]);

    function logout(): void {
        
        authService.logout(); // logout  user and delete token
        alert("Bye Bye...");
    }

    return (
        
        <div className="AuthMenu">
            {!user &&
                <>
                    <span>Hello Guest | </span>
                    <NavLink to="/login">Login</NavLink>
                    <span> | </span>
                    <NavLink to="/register">Register</NavLink>
                </>
            }

            { user && 
                <>
                    <span>Hello {user.firstName} {user.lastName} | </span>
                    <NavLink to="/home" onClick={logout}>Logout</NavLink>
                </>
            }

        </div>
    );
}

export default AuthMenu;

