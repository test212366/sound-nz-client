import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { trackReducer } from "./tracks";

export const rootReducers = combineReducers({
	tracks: trackReducer,
	login: loginReducer
})
export type RootState = ReturnType<typeof rootReducers>