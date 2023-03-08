
import { createContext } from "react";
import io from "socket.io-client";
import { AppDataActionType, AppDataStore } from "../Redux/AppDataState";
import appConfig from "./AppConfig";

export const socket = io(appConfig.backendUrl + appConfig.socketPort);

socket.on("connect", () => {
  
  // Store socket id in AppDataStore
  AppDataStore.dispatch({type:AppDataActionType.setSocketId, payload:socket.id});
  console.log(socket.id);
  /*
  socket.on("message_ack", async (msg: MessageModelWithUsernames) => { 
    chatStore.dispatch({type:ChatActionType.addMessage, payload: msg});
  });

  socket.on("new_message", async (msg: MessageModelWithUsernames) => { 

    // Check if active chat partner == recipient id

    chatStore.dispatch({type:ChatActionType.addMessage, payload: msg});
  });
  */

});

export const SocketContext = createContext(socket);
