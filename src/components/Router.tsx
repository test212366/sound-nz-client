import { Route, Routes } from "react-router-dom"
import { IRoute } from "../types/route"
import { privateRoutes, publicRoutes } from "../utils/routes"
import { BrowserRouter as RouterB } from 'react-router-dom';
import Main from "../pages/Main";
import Navigation from "./Navigation";
import Playnow from "./Playnow";
import AddPlayList from "./AddPlayList";
import Login from "./Login";
 
 
const Router = () => {
	const user = false 
	return (
		
			<RouterB>
				<Navigation/>
				<Playnow/>
				<AddPlayList />
				<Login />
				<Routes>
				
					 	
						{user ? '' 
						: publicRoutes.map((component:IRoute, i: number) => <Route key={i} path={component.path} element={ <component.component/>} /> )}
				 		<Route path="*" element={<Main/>} />
					 
				</Routes>
		 
			</RouterB>
			 
		 
	)
}
export default Router