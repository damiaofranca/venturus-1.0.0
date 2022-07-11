import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Components from "./Components/index";
import Container from "./Pages/Container";
import HomePage from "./Pages/HomePage";
import Teams from "./Pages/Team";

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Components.Header />
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="register-team" element={<Teams.AddTeamPage />}></Route>
					<Route path="edit-team/:id" element={<Teams.EditTeamPage />}></Route>
				</Routes>
				<Components.Footer />
				<ToastContainer />
			</Container>
		</BrowserRouter>
	);
}

export default App;
