import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import UserModel from "../Models/UserModel";

export class AuthState {
  public token : string = null;
  public user: UserModel = null;

  public constructor(){
    this.token = localStorage.getItem("token");
    if(this.token){
      this.user = jwtDecode<{user: UserModel}>(this.token).user;
    }
  }
}

export enum AuthActionType {
  Register, 
  Login, 
  Logout
}

export interface AuthAction {
  payload?: string;
  type: AuthActionType;
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState{
  const newState = {...currentState};

  switch(action.type){
    case AuthActionType.Register:
    case AuthActionType.Login:
      newState.token = action.payload;
      newState.user = jwtDecode<{user: UserModel}>(action.payload).user;
      localStorage.setItem("token", newState.token);
      break;
    case AuthActionType.Logout:  
    // no payload!
    newState.token = null;
    newState.user = null;
    localStorage.removeItem("token");
    break;   
  }

  return newState;
}

export const authStore = createStore(authReducer);

