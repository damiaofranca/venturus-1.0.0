import styled from "styled-components";

export const Container = styled.div`
	width: 47%;
	background-color: #fff;
	box-sizing: border-box;
	border: 1px solid #f2f2f2;
	border-top-left-radius: 0.4rem;
	border-top-right-radius: 0.4rem;
	box-shadow: 1px 1px 1px 1px #f2f2f2;
	@media screen and (max-width: 960px) {
		& {
			width: 100%;
		}
	}
`;

export const TeamsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #f2f2f2;
	padding: 1rem 0.6rem 1rem 1.4rem;
`;
export const TitleTeamsContainer = styled.label`
	margin: 0;
	color: #572e8b;
	font-weight: 600;
	font-size: 1.2rem;
`;

export const AddTeam = styled.button`
	border: none;
	display: flex;
	cursor: pointer;
	padding: 0.22rem;
	align-items: center;
	border-radius: 0.46rem;
	justify-content: center;
	box-shadow: 0px 3px 8px #8e1f6d8f;
	background: linear-gradient(180deg, #c00e4f, #8b206f);
`;

export const ListTeamHeader = styled.div`
	display: flex;
	margin-top: 1rem;
`;

export const ListTeamHeaderTitle = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	padding: 0 0.5rem 0 1rem;
	justify-content: space-between;

	&:last-child {
		width: 70%;
		border-left: 1px solid #f2f2f2;
	}
`;

export const ContainerFilter = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ButtonFilter = styled.button`
	border: none;
	background-color: transparent;
`;

export const ArrowFilter = styled.img`
	cursor: pointer;
`;

export const ListTeam = styled.div`
	flex: 1;
	display: flex;
	overflow: auto;
	flex-direction: column;
	height: calc(100% - 118px);
`;

export const TeamsContainer = styled.div`
	height: 100%;
	overflow: auto;

	&::-webkit-scrollbar-track {
		background-color: #e8e7e7;
	}

	&::-webkit-scrollbar {
		width: 6px;
		background-color: #000000;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #d6d6d6;
	}
`;

export const TeamItem = styled.div<{ setStyle: boolean | null }>`
	display: flex;
	cursor: pointer;
	min-height: 3rem;
	align-items: center;
	border-radius: 0.3rem;
	transition: all 0.15s ease-in-out;
	color: ${(props) => (props.setStyle ? "#bc4d89" : "#000000")};
	background-color: ${(props) => (props.setStyle ? "#f7eef7" : "transparent")};

	& > div > div {
		display: ${(props) => (props.setStyle ? "flex" : "none")};
	}

	&:hover {
		background-color: #f7eef7;
		& > div > div {
			display: flex;
		}
	}

	&:first-child {
		display: flex;
		margin-top: 1rem;
	}
`;

export const TeamItemInfo = styled.div`
	width: 30%;
	padding: 0 0.5rem 0 1rem;

	&:last-child {
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const IconsContainer = styled.div`
	display: none;
`;

export const ImgActions = styled.img`
	width: auto;
	height: 1.2rem;
	margin: 0 0.3rem;
`;
