import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	display: flex;
	overflow-y: auto;
	padding: 2rem 2rem 0 2rem;
	justify-content: space-between;

	@media screen and (max-width: 960px) {
		box-sizing: border-box;
		flex-direction: column;
	}
`;
