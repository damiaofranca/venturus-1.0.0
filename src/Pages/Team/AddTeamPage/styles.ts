import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	display: flex;
	overflow-y: auto;
	padding: 2rem;
	@media screen and (max-width: 960px) {
		box-sizing: border-box;
	}
`;
