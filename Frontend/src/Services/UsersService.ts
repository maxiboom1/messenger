import axios from "axios";
import UserListModel from "../Models/UserListModel";
import appConfig from "../Utils/AppConfig";

class UsersService {

  // Get all users on login/register
  public async getAllUsers(): Promise <void> {
    const response = await axios.get<UserListModel[]>(appConfig.getAllUsersUrl);
    const users = response.data;
  }

}

const usersService = new UsersService();

export default usersService;