import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	width: 47%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 960px) {
		& {
			width: 100%;
			margin-top: 1rem;
		}
	}
`;

export const TopFiveContainer = styled.div`
	border-radius: 0.4rem;
	background-color: #fff;
	box-sizing: border-box;
	border: 1px solid #f2f2f2;
	box-shadow: 1px 1px 1px 1px #f2f2f2;
`;

export const TopHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #f2f2f2;
	padding: 1rem 0.6rem 1rem 1.4rem;
`;

export const TopHeaderTitle = styled.label`
	margin: 0;
	color: #572e8b;
	font-weight: 600;
	font-size: 1.2rem;
`;

export const Tops = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
`;

export const Avgs = styled.div`
	width: 47%;
	display: flex;
	flex-direction: column;
`;

export const AvgsTitle = styled.label`
	color: #333;
	font-size: 1rem;
	font-weight: 500;
	margin-bottom: 1rem;
`;

export const AvgItems = styled.div`
	display: flex;
	border-radius: 0.3rem;
	flex-direction: column;
	padding: 0.2rem 0.14rem;
	background-color: #e9e3e8;
`;

export const NavItem = styled(Link)`
	text-decoration: none;
`;

export const AvgItem = styled.div`
	display: flex;
	cursor: pointer;
	margin: 0.14rem;
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
	background-color: #fff;
	justify-content: space-between;
	transition: all 0.15s ease-in-out;

	&:hover {
		background-color: #f7eef7;
	}
`;

export const NameTeamItem = styled.p`
	margin: 0;
	color: #333;
	font-size: 0.9rem;
`;

export const ResultTeamItem = styled.label`
	margin: 0;
	color: #333;
	font-weight: 600;
	font-size: 0.9rem;
`;

export const MostPicked = styled.div`
	flex: 1;
	display: flex;
	margin-top: 1rem;
	position: relative;
	border-top-left-radius: 0.4rem;
	border-top-right-radius: 0.4rem;
	background: linear-gradient(180deg, #c00e4f, #8b206f);

	@media screen and (max-width: 960px) {
		& {
			min-height: 18rem;
		}
	}
`;

export const MidField = styled.div`
	position: absolute;
	top: 50%;
	right: 50%;
	width: 4.5rem;
	height: 4.5rem;
	border-radius: 50%;
	border: 2px solid #c3c3c3;
	transform: translate(50%, -50%);
`;

export const MidLineField = styled.div`
	right: 50%;
	width: 1px;
	height: 100%;
	position: absolute;
	background-color: #c3c3c3;
`;

export const Sides = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-top-left-radius: 0.4rem;
`;

export const MostPickedTitle = styled.p`
	color: #fff;
	font-weight: 500;
	font-size: 1.4rem;
	text-align: center;
	margin: 0 0 0.5rem 0;
`;

export const ContainerStatus = styled.div`
	display: flex;

	@media screen and (max-width: 1390px) and (min-width: 961px) {
		& {
			margin-top: 1rem;
		}
	}
`;

export const CircleNamePlayer = styled.div`
	width: 7rem;
	color: #fff;
	height: 7rem;
	display: flex;
	font-size: 2rem;
	font-weight: 600;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	background-color: #8f1f6d;
	box-shadow: 0px 0px 1px 2px #bb0f52;

	@media screen and (max-width: 1390px) and (min-width: 961px) {
		& {
			width: 5rem;
			height: 5rem;
		}
	}
`;

export const Statics = styled.div`
	color: #fff;
	display: flex;
	font-weight: 500;
	font-size: 1.4rem;
	margin-left: 0.3rem;
	flex-direction: column;
`;

export const LineHorizontal = styled.div`
	height: 2px;
	min-width: 5rem;
	background-color: #fff;

	@media screen and (max-width: 1390px) and (min-width: 961px) {
		& {
			min-width: 3rem;
		}
	}
`;
