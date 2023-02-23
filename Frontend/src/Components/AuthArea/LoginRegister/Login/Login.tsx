import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../../Models/CredentialsModel";
import authService from "../../../../Services/AuthService";

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            alert("nice");
            window.location.reload();
            // navigate("/"); DOESNT WORK
        } catch (err: any) {
            alert(err.message);
        }
    }

    // or - useEffect() to send a request directly

    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>
                <input placeholder="JohnDoe123" type="text" {...register("username")} />
                <input placeholder="my_password" type="password" {...register("password")} />
                <button>Start Chatting!</button>
            </form >
        </div>
    );
}

export default Login;
