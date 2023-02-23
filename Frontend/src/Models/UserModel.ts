class UserModel {
  public userId: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public isOnline: boolean;
  public lastActive: string; // -> new Date() ?
  public userImage: string;
}

export default UserModel;