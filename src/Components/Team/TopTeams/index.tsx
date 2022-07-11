import React, { useEffect, useMemo, useState } from "react";
import { Player, TeamEntenty } from "../../../Interfaces/team";
import { TeamService } from "../../../Services";
import {
	AvgItem,
	AvgItems,
	Avgs,
	AvgsTitle,
	CircleNamePlayer,
	Container,
	ContainerStatus,
	LineHorizontal,
	MidField,
	MidLineField,
	MostPicked,
	MostPickedTitle,
	NameTeamItem,
	NavItem,
	ResultTeamItem,
	Sides,
	Statics,
	TopFiveContainer,
	TopHeader,
	TopHeaderTitle,
	Tops,
} from "./styles";
import "./styles.ts";

const TopTeams: React.FC<{ data: TeamEntenty[] }> = ({ data }) => {
	const [teams, setTeams] = useState<TeamEntenty[]>(data);
	const [mostPicketPlayer, setMostPicketPlayer] = useState<any>(null);
	const [lessPicketPlayer, setLessMostPicketPlayer] = useState<any>(null);
	const highestAvg = (team: TeamEntenty, index: number) => {
		if (team.avgAge && team.avgAge > 24) {
			return (
				<NavItem to={`edit-team/${team.id}`} key={team.id}>
					<AvgItem>
						<NameTeamItem>{team.name}</NameTeamItem>
						<ResultTeamItem>{Math.floor(team.avgAge)}</ResultTeamItem>
					</AvgItem>
				</NavItem>
			);
		} else {
			return null;
		}
	};

	const lowestAvg = (team: TeamEntenty, index: number) => {
		if (team.avgAge && team.avgAge > 20 && team.avgAge < 24) {
			return (
				<NavItem to={`edit-team/${team.id}`} key={team.id}>
					<AvgItem>
						<NameTeamItem>{team.name}</NameTeamItem>
						<ResultTeamItem>{Math.floor(team.avgAge)}</ResultTeamItem>
					</AvgItem>
				</NavItem>
			);
		} else {
			return null;
		}
	};

	const realodDatas = async () => {
		try {
			const response = await TeamService.fetchPlayerById("276");
			const _response = await TeamService.fetchPlayerById("304484");
			setMostPicketPlayer(response);
			setLessMostPicketPlayer(_response);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		realodDatas();
		for (let index = 0; index < data.length; index++) {
			const players_keys = Object.keys(data[index].players);
			let sumOfAges = 0;
			const totalPlayers = players_keys.length;
			players_keys.forEach((key) => {
				const player = data[index].players?.[key as any];
				sumOfAges += player.age;
			});
			const avgAge = sumOfAges / totalPlayers;
			(data as any)[index].avgAge = avgAge;
		}
		setTeams(data);
	}, [data]);
	return (
		teams && (
			<Container>
				<TopFiveContainer>
					<TopHeader>
						<TopHeaderTitle>Top 5</TopHeaderTitle>
					</TopHeader>
					<Tops>
						<Avgs>
							<AvgsTitle>Highest avg age</AvgsTitle>
							<AvgItems>
								{teams.map((team, index) => highestAvg(team, index))}
							</AvgItems>
						</Avgs>
						<Avgs>
							<AvgsTitle>Lowest avg age</AvgsTitle>
							<AvgItems>
								{teams.map((team, index) => lowestAvg(team, index))}
							</AvgItems>
						</Avgs>
					</Tops>
				</TopFiveContainer>
				<MostPicked>
					<MidField></MidField>
					<MidLineField></MidLineField>
					<Sides>
						<MostPickedTitle>Most picked player</MostPickedTitle>
						<ContainerStatus>
							<CircleNamePlayer>CR</CircleNamePlayer>
							<Statics>
								67% <LineHorizontal></LineHorizontal>
							</Statics>
						</ContainerStatus>
					</Sides>
					<Sides>
						<MostPickedTitle>Less picked player</MostPickedTitle>
						<ContainerStatus>
							<CircleNamePlayer>LM</CircleNamePlayer>
							<Statics>
								75% <LineHorizontal></LineHorizontal>
							</Statics>
						</ContainerStatus>
					</Sides>
				</MostPicked>
			</Container>
		)
	);
};

export default TopTeams;
