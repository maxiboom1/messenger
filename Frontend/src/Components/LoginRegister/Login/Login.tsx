import "./Login.css";
import { useNavigate } from "react-router-dom";


function Login(): JSX.Element {
    const navigate = useNavigate();

    async function handleSubmit(e: any) {
        e.preventDefault();
        try {
            // send to backend for validation
            // await token 
            // redirect to chatPage -> navigate("/home")
            // navigate("/chatRooms")
        } catch {
            // err 
        }
    }

    // or - useEffect() to send a request directly

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <input placeholder="JohnDoe123" type="text" />
                <input placeholder="my_password" type="password" />
                <button>Start Chatting!</button>
            </form >
        </div>
    );
}

export default Login;
