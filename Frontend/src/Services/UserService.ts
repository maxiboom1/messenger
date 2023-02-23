import axios from "axios";
import UserModel from "../Models/UserModel";
import { UsersActionType, usersStore } from "../Redux/UsersState";
import appConfig from "../Utils/AppConfig";

class UserService{
  public async getAllUsers(): Promise<UserModel[]>{
    let users = usersStore.getState().users;
    if(users.length === 0){
      const response = await axios.get<UserModel[]>(appConfig.usersUrl);
      users = response.data;
      usersStore.dispatch({
        type: UsersActionType.FetchUsers,
        payload: users
      });
    }
    return users;
  }
}

const userService = new UserService();
export default userService;