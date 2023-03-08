import { createStore } from "redux";

// 1. Global Auth State:
export class AppDataState {
    public socketId: string = undefined;
}

// 2. Auth Action Type:
export enum AppDataActionType {
setSocketId,
clearSocketId
}

// 3. Auth Action:
export interface AppDataAction {
    type: AppDataActionType;
    payload?: string;
}

// 4. Auth Reducer: 
export function AppDataReducer(currentState = new AppDataState(), action: AppDataAction): AppDataState {

    // Create a new state: 
    const newState = { ...currentState };

    // Perform the needed action: 
    switch (action.type) {

        case AppDataActionType.setSocketId:
            newState.socketId = action.payload;
            break;

        case AppDataActionType.clearSocketId:
            newState.socketId = undefined;
            break;
    }

    // Return new state: 
    return newState;
}

// 5. Auth Store:
export const AppDataStore = createStore(AppDataReducer);