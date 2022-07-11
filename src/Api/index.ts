import axios from "axios";

const baseURL = "https://v3.football.api-sports.io/";

const api = axios.create({
	baseURL,
	headers: {
		"x-rapidapi-key": "d90b24cc8608348b118ce81a7092bff5",
	},
});

export default api;
