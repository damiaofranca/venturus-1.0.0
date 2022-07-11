import styled from "styled-components";

export const BackgroundModal = styled.div`
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
	background-color: #181818a6;
`;

export const Modal = styled.div`
	min-width: 30vw;
	padding: 0.3rem;
	border-radius: 0.2rem;
	background-color: #fff;
`;

export const Title = styled.div`
	color: #333;
	font-weight: 600;
	font-size: 1.4rem;
	margin-bottom: 1rem;
`;

export const Content = styled.div`
	color: #333;
	font-size: 1rem;
	font-weight: 400;
	min-height: 8rem;
`;

export const Footer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const Cancel = styled.div`
	color: #fff;
	border: none;
	cursor: pointer;
	margin: 0 0.5rem;
	font-weight: 600;
	font-size: 0.9rem;
	padding: 0.5rem 1rem;
	border-radius: 0.2rem;
	background-color: #d7d6d5;
`;

export const Delete = styled.div`
	color: #fff;
	border: none;
	cursor: pointer;
	margin: 0 0.5rem;
	font-weight: 600;
	font-size: 0.9rem;
	padding: 0.5rem 1rem;
	border-radius: 0.2rem;
	background-color: #e9132b;
`;
