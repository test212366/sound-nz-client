 
import Router from "./components/Router"
 

const img = require('./images/vector-abstract-background-dark-and-black-overlaps-009.jpg')

const App = () => {
  return (
	<main>
			 
		   <img src={img} className="main__back-img" alt="" />
			<Router />
	</main>
 
  )
}

export default App
