import React, { useEffect, useState } from "react";
import TeamsList from "../../Components/Team/TeamsList";
import TopTeams from "../../Components/Team/TopTeams";
import { TeamEntenty } from "../../Interfaces/team";
import { Container } from "./styles";

const HomePage: React.FC = () => {
	const [teams, setTeams] = useState<TeamEntenty[]>([]);

	useEffect(() => {
		setTeams(JSON.parse(localStorage.getItem("data")!));
	}, []);
	return (
		<Container>
			<TeamsList data={teams} />
			<TopTeams data={teams ? teams : []} />
		</Container>
	);
};

export default HomePage;
