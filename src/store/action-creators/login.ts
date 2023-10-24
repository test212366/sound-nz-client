import { Dispatch } from "redux";
import {  LoginActions, LoginActionsTypes } from "../../types/login";
import { TracksActionsTypes } from "../../types/tracks";

export const viewWrapperLogin = (value: boolean) => (dispatch: Dispatch<LoginActions>) =>	dispatch({type: LoginActionsTypes.SET_VIEW_LOGIN_WRAPPER, payload: value}),
	viewLoginF = (value: boolean) => (dispatch: Dispatch<LoginActions>) =>	dispatch({type: LoginActionsTypes.SET_VIEW_LOGIN, payload: value}),
	viewRegistrationF = (value: boolean) => (dispatch: Dispatch<LoginActions>) =>	dispatch({type: LoginActionsTypes.SET_REGISTRATION, payload: value}),
	registration = (data:any) => async (dispatch: Dispatch<LoginActions>) => {
		try {
			const responce = await fetch('https://soundnznode.herokuapp.com/api/user/registration',  {
				headers: {'Content-type': 'application/json'},
				body: JSON.stringify(data),
				method: 'POST'
			}),
				user = await responce.json()
				if(user.error) return dispatch({type: LoginActionsTypes.SET_ERRORS, payload: user.error})
				localStorage.setItem('token', user.token)
				dispatch({type: LoginActionsTypes.SET_USER, payload: user.user})		
				 
			} catch(e) {
			console.log(e)
		}
	},
	login = (dataI: any) => async (dispatch: Dispatch<LoginActions>) => {
		try {
			const responce:any = await fetch('https://soundnznode.herokuapp.com/api/user/login', {
				headers: {'Content-type': 'application/json'},
				method: 'POST',
				body: JSON.stringify({email: dataI.email, password: dataI.password})
			}),
				data = await responce.json()
				if(data.error) return dispatch({type: LoginActionsTypes.SET_ERRORS, payload: data.error})
				dispatch({type: LoginActionsTypes.SET_USER, payload: data.user})
				dispatch({type: LoginActionsTypes.SET_VIEW_LOGIN, payload: false})
				dispatch({type: LoginActionsTypes.SET_REGISTRATION, payload: true})
				if(data.user.isActivated) dispatch({type: LoginActionsTypes.SET_VIEW_LOGIN_WRAPPER, payload: false})
				localStorage.setItem('token', data.token)
			} catch(e) {
			console.log(e)
		}
	},
	loginLocal = () => async (dispatch: Dispatch<any>) => {
		try {
			const token = localStorage.getItem('token'),
				likeds = JSON.parse(localStorage.getItem('liked') || '')
					 
			if(likeds) dispatch({type: TracksActionsTypes.SET_FAVORITIES_TRACKS, payload: likeds})
		 
			if(!token) return
			const responce = await fetch('https://soundnznode.herokuapp.com/api/user/loginlocalstorage', {
					headers: {'Content-type': 'application/json'},
					body:JSON.stringify({token}),
					method: 'POST'
				}),
				user = await responce.json()
				//oluklqmnnsmxyyut
				if(user){
					dispatch({type: TracksActionsTypes.SET_PLAYLISTS, payload: user.playlists})
					dispatch({type: LoginActionsTypes.SET_USER, payload: user})
					dispatch({type: LoginActionsTypes.SET_REGISTRATION, payload: true})
				} 	

		} catch(e) {
			console.log(e)
		}
	},
	setIsViewNav = (value: boolean) => (dispatch: Dispatch<LoginActions>) => dispatch({type: LoginActionsTypes.SET_IS_VIEW_NAVBAR, payload: value}) 
	 
