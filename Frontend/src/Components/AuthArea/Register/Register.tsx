import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import "./Register.css";

function Register(): JSX.Element {
    
    const {register, handleSubmit} = useForm<UserModel>()
    const navigate = useNavigate();
    
    async function send(user: UserModel): Promise<void>{
        
    }
    
    return (
        <div className="Register">
			<h2>Welcome to register page!</h2>
        </div>
    );
}

export default Register;
