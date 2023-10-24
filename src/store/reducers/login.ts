import { LoginActions, LoginActionsTypes, LoginState } from "../../types/login";

const initialState: LoginState = {
	errors: '',
	viewLogin: false,
	viewLoginWrapper: false,
	viewRegistration: false,
	user: null,
	isViewNavbar: false
}
export const loginReducer = (state:LoginState = initialState , action: LoginActions): LoginState => {
	switch(action.type) {	
		case LoginActionsTypes.SET_IS_VIEW_NAVBAR:
			return {...state, isViewNavbar: action.payload}
		case LoginActionsTypes.SET_USER:
			return {...state, user: action.payload}
		case LoginActionsTypes.SET_ERRORS:
			return {...state, errors: action.payload}
		case LoginActionsTypes.SET_VIEW_LOGIN_WRAPPER:
			return {...state, viewLoginWrapper: action.payload}
		case LoginActionsTypes.SET_VIEW_LOGIN:
			return {...state, viewLogin: action.payload}
		case LoginActionsTypes.SET_REGISTRATION:
			return {...state, viewRegistration: action.payload}
		default: 
			return state
	}
}