import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	align-items: center;
	padding: 0.3rem 3rem;
	justify-content: space-between;
	background: linear-gradient(90deg, #c00e4f, #8b206f);
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NameEnterprise = styled.h1`
	color: #fff;
	font-weight: 500;
	font-size: 1.2rem;
	margin: 0 0 0 1.2rem;

	@media screen and (max-width: 720px) {
		display: none;
	}
`;

export const User = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const InitialLetters = styled.div`
	display: flex;
	width: 2.8rem;
	height: 2.8rem;
	cursor: pointer;
	border-radius: 50%;
	align-items: center;
	background-color: #fff;
	justify-content: center;
`;

export const Nickname = styled.h5`
	margin: 0;
	color: #fff;
	font-size: 1rem;
	font-weight: 400;
	height: fit-content;
	margin-right: 0.5rem;
`;

export const Initials = styled.label`
	margin: 0;
	color: #333;
	font-weight: 600;
	font-size: 1.2rem;
`;
