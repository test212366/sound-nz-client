export interface IUser {
	name: string
	password: string
	email:string
	activationLink: string
	isActivated: boolean
	playlists: any[]
	 
}

export interface LoginState {
	user: IUser | null
	viewLoginWrapper: boolean
	viewLogin: boolean
	viewRegistration: boolean
	errors: string
	isViewNavbar:boolean
}
export enum LoginActionsTypes {
	SET_IS_VIEW_NAVBAR = 'SET_IS_VIEW_NAVBAR',
	SET_USER = 'SET_USER',	
	SET_VIEW_LOGIN_WRAPPER = 'SET_VIEW_LOGIN_WRAPPER',
	SET_VIEW_LOGIN = 'SET_VIEW_LOGIN',
	SET_REGISTRATION = 'SET_REGISTRATION',
	SET_ERRORS = 'SET_ERRORS'
}
interface setIsViewNavbar {
	type: LoginActionsTypes.SET_IS_VIEW_NAVBAR
	payload: boolean
}
interface setUser {
	type: LoginActionsTypes.SET_USER
	payload: IUser
}
interface setErrors {
	type: LoginActionsTypes.SET_ERRORS
	payload: string
}
interface setViewLoginWrapper {
	type: LoginActionsTypes.SET_VIEW_LOGIN_WRAPPER
	payload: boolean
}
interface setViewLogin {
	type: LoginActionsTypes.SET_VIEW_LOGIN
	payload: boolean
}
interface setRegistration {
	type: LoginActionsTypes.SET_REGISTRATION
	payload: boolean
}
 
export type LoginActions = setViewLoginWrapper | setViewLogin | setRegistration
| setErrors | setUser | setIsViewNavbar
 