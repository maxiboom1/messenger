import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../../Models/CredentialsModel";
import authService from "../../../../Services/AuthService";
import { useEffect, useState } from "react";

function Login(props: any): JSX.Element {

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

    // REACT-CSS VALIDATIONS:
    const [enteredUsername, setUsername] = useState("");
    const [enteredPassword, setPassword] = useState("");
    const [validUsername, setValidUsername] = useState<boolean>();
    const [validPassword, setValidPassword] = useState<boolean>();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        setFormIsValid(enteredUsername.length >= 3 && enteredPassword.length >= 6);
    }, [validUsername, validPassword])

    function validateUsername(): void {
        setValidUsername(enteredUsername.length >= 3);
    }

    function validatePassword(): void {
        setValidPassword(enteredPassword.length >= 6);
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>

                <div className={`${validUsername === false ? 'invalid' : ''}`}>
                    <input
                        placeholder="JohnDoe123"
                        type="text" {...register("username")}
                        value={enteredUsername}
                        onChange={(e: any) => { setUsername(e.target.value) }}
                        onBlur={validateUsername}

                    />
                </div>

                <div className={`${validPassword === false ? 'invalid' : ''}`}>
                    <input
                        placeholder="my_password"
                        type="password" {...register("password")}
                        value={enteredPassword}
                        onChange={(e: any) => { setPassword(e.target.value) }}
                        onBlur={validatePassword}

                    />
                </div>

                <button disabled={formIsValid}>Start Chatting!</button>
            </form >
        </div>
    );
}

export default Login;
