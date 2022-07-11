import React from "react";
import "./styles.ts";
import VenturusLogo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import {
	Container,
	InitialLetters,
	Initials,
	Logo,
	NameEnterprise,
	Nickname,
	User,
} from "./styles";

const Header: React.FC = () => {
	return (
		<Container>
			<Logo>
				<Link to={"/"}>
					<img src={VenturusLogo} alt="logo of venturus enterprise" />
				</Link>
				<NameEnterprise>Squard Management Tool</NameEnterprise>
			</Logo>
			<User>
				<Nickname>John Doe</Nickname>
				<InitialLetters>
					<Initials>JD</Initials>
				</InitialLetters>
			</User>
		</Container>
	);
};

export default Header;
