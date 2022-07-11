import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "../../../Assets/delete.png";
import Edit from "../../../Assets/edit.png";
import filterDown from "../../../Assets/filterDown.png";
import filterUp from "../../../Assets/filterUp.png";
import add from "../../../Assets/plus.png";
import Share from "../../../Assets/share.png";
import { TeamEntenty } from "../../../Interfaces/team";
import {
	AddTeam,
	ArrowFilter,
	ButtonFilter,
	Container,
	ContainerFilter,
	IconsContainer,
	ImgActions,
	ListTeam,
	ListTeamHeader,
	ListTeamHeaderTitle,
	TeamItem,
	TeamItemInfo,
	TeamsContainer,
	TeamsHeader,
	TitleTeamsContainer,
} from "./styles";
import "./styles.ts";

const TeamsList: React.FC<{
	data: TeamEntenty[];
}> = ({ data }) => {
	const teamsRef = useRef<any>([]);
	const [stylizedItem, setStylizedItem] = useState<number | null>(null);
	const [teams, setTeams] = useState<any[]>(data);

	const sortByNameAscending = () => {
		const _prices = [...data].sort((a: TeamEntenty, b: TeamEntenty) =>
			a.name.localeCompare(b.name)
		);
		setTeams(_prices);
	};

	const sortByNameDescending = () => {
		const _prices = [...data]
			.sort((a: TeamEntenty, b: TeamEntenty) => a.name.localeCompare(b.name))
			.reverse();
		setTeams(_prices);
	};

	const sortByDescriptionAscending = () => {
		const _prices = [...data].sort((a: TeamEntenty, b: TeamEntenty) =>
			a.description!.localeCompare(b.description!)
		);
		setTeams(_prices);
	};

	const sortByDescriptionDescending = () => {
		const _prices = [...data]
			.sort((a: TeamEntenty, b: TeamEntenty) =>
				a.description!.localeCompare(b.description!)
			)
			.reverse();
		setTeams(_prices);
	};

	const listTeams = useMemo(() => {
		return (teams && teams).map((value: any, index: any) => (
			<TeamItem
				ref={(el) => {
					teamsRef.current[index] = el;
				}}
				key={value.name}
				onClick={() => {
					setStylizedItem(index);
				}}
				setStyle={stylizedItem === index ? true : null}
			>
				<TeamItemInfo>{value.name}</TeamItemInfo>
				<TeamItemInfo>
					{value.description}
					<IconsContainer>
						<ImgActions src={Delete} title="Delete team" alt="delete icon" />
						<ImgActions src={Share} title="Share team" alt="share icon" />
						<Link to={`edit-team/${value.id}`}>
							<ImgActions src={Edit} title="Edit team" alt="edit icon" />
						</Link>
					</IconsContainer>
				</TeamItemInfo>
			</TeamItem>
		));
	}, [teams]);

	useEffect(() => {
		setTeams(data);
	}, [data]);
	return (
		<Container>
			<TeamsHeader>
				<TitleTeamsContainer>My Teams</TitleTeamsContainer>
				<AddTeam>
					<Link to={"register-team"}>
						<img src={add} alt="add icon" />
					</Link>
				</AddTeam>
			</TeamsHeader>
			<ListTeamHeader>
				<ListTeamHeaderTitle>
					Name
					<ContainerFilter>
						<ButtonFilter onClick={sortByNameAscending}>
							<ArrowFilter src={filterDown} alt="filter down icon" />
						</ButtonFilter>
						<ButtonFilter onClick={sortByNameDescending}>
							<ArrowFilter src={filterUp} alt="filter up icon" />
						</ButtonFilter>
					</ContainerFilter>
				</ListTeamHeaderTitle>
				<ListTeamHeaderTitle>
					Description
					<ContainerFilter>
						<ButtonFilter onClick={sortByDescriptionAscending}>
							<ArrowFilter src={filterDown} alt="filter down icon" />
						</ButtonFilter>
						<ButtonFilter onClick={sortByDescriptionDescending}>
							<ArrowFilter src={filterUp} alt="filter up icon" />
						</ButtonFilter>
					</ContainerFilter>
				</ListTeamHeaderTitle>
			</ListTeamHeader>
			<ListTeam>
				<TeamsContainer>{listTeams}</TeamsContainer>
			</ListTeam>
		</Container>
	);
};

export default TeamsList;
