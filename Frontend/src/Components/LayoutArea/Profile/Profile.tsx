import "./Profile.css";
import { useEffect } from "react";
import usersService from "../../../Services/UsersService";


function Profile(): JSX.Element {
    
    useEffect(() => {
        usersService.getAllUsers().then(()=>{
            console.log('users loaded')
        })

    },[])
    

    return (
        <h3>chat room</h3>
    );
}

export default Profile;
