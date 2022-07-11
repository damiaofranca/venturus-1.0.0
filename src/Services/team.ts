import api from "../Api/index";

export const fetchPlayers = async (name: string): Promise<any> => {
	const { data } = await api.get<any>(`players`, {
		params: {
			search: name,
			league: 0,
		},
	});
	return data;
};

export const fetchPlayerById = async (id: string): Promise<any> => {
	const { data } = await api.get<any>(`players`, {
		params: {
			id: id,
			league: 0,
			season: "2022",
		},
	});
	return data;
};
