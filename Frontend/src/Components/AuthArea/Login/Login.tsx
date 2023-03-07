import { useForm } from "react-hook-form";
import{useContext} from "react";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import "./Login.css";
import { authStore } from "../../../Redux/AuthState";

function Login(): JSX.Element {
    
    const {register, handleSubmit} = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel):Promise<void> {
        try {
            await authService.login(credentials);
            navigate("/chatroom")

        } catch (err: any) {
            alert(err.message);
        }
    }


    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>
                <input placeholder="Username" type="text" {...register("username")} />
                <input placeholder="Password" type="password" {...register("password")} />
                <button>Start Chatting!</button>
            </form >
        </div>
    );
}

export default Login;
