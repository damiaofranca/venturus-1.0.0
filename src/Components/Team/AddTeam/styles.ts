import styled from "styled-components";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

export const Container = styled.div`
	width: 100%;
	height: max-content;
	border-radius: 0.4rem;
	box-sizing: border-box;
	background-color: #fff;
	border: 1px solid #f2f2f2;
	box-shadow: 1px 1px 1px 1px #f2f2f2;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #f2f2f2;
	padding: 1rem 0.6rem 1rem 1.4rem;
`;
export const TitleHeaderContainer = styled.label`
	margin: 0;
	color: #572e8b;
	font-weight: 600;
	font-size: 1.2rem;
`;

export const SubTitle = styled.p`
	color: #8e8e8e;
	font-weight: 600;
	text-align: center;
	margin: 1.5rem 0 1rem 0;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 960px) {
		& {
			padding: 1rem;
		}
	}
`;

export const TeamInformation = styled.div`
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 960px) {
		& {
			flex-direction: column;
		}
	}
`;

export const FirstInformation = styled.div`
	width: 35%;

	@media screen and (max-width: 960px) {
		& {
			width: 100%;
		}
	}
`;

export const SecondInformation = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (max-width: 960px) {
		& {
			width: 100%;
		}
	}
`;

export const FormItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem 0;

	& > label {
		order: -1;
	}
`;

export const Label = styled.label`
	display: flex;
	color: #000000;
	margin: 0.5rem 0;
	font-weight: 600;
	font-size: 0.9rem;
	align-items: center;
`;

export const Input = styled.input`
	border-radius: 0.2rem;
	margin-bottom: 0.5rem;
	padding: 0.6rem 0.5rem;
	border: 1px solid #f1f1f1;
	&:focus {
		outline: none;
		border: 1px solid #dcdcdc;
	}

	&:invalid {
		border: 1px solid #c60946;
	}
`;

export const FormItemRadioContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1.5rem 0 0.5rem 0;
`;

export const ContainerRadiosWrap = styled.div`
	display: flex;
`;

export const ContainerRadios = styled.div`
	display: flex;

	&:last-child {
		margin-left: 1rem;
	}
`;

export const Radio = styled.input`
	margin: 0 0.5rem 0 0;
	padding: 0.6rem 0.5rem;
`;

export const RadioLabel = styled.label`
	color: #cdcdcd; ;
`;

export const Description = styled.textarea`
	resize: none;
	min-height: 20rem;
	border-radius: 0.2rem;
	border: 1px solid #f1f1f1;
	&:focus {
		outline: none;
		border: 1px solid #dcdcdc;
	}
`;

export const Tags = styled(TagsInput)`
	resize: none;
	cursor: pointer;
	padding: 0.2rem;
	min-height: 12rem;
	border-radius: 0.2rem;
	border: 1px solid #f1f1f1;
	&:focus {
		outline: none;
		border: 1px solid #dcdcdc;
	}
`;

export const ConfigureSquad = styled.div`
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 960px) {
		& {
			flex-direction: column-reverse;
		}
	}
`;

export const ConfigureSquadTitle = styled.p`
	color: #8e8e8e;
	font-weight: 600;
	text-align: center;
	margin: 3rem 0 2rem 0;
`;

export const FirstConfig = styled.div`
	width: 35%;
	flex-direction: column;

	@media screen and (max-width: 960px) {
		& {
			width: 100%;
		}
	}
`;

export const SecondConfig = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (max-width: 960px) {
		& {
			width: 100%;
		}
	}
`;

export const SelectFormation = styled.select`
	position: relative;
	min-width: 8rem;
	height: 1.6rem;
	margin-left: 2rem;
`;

export const OptionSelect = styled.option``;

export const Field = styled.div`
	min-height: 34rem;
	position: relative;
	border-radius: 0.2rem;
	background: linear-gradient(326deg, #792d81, #a9387c);
`;

export const MidField = styled.hr`
	top: 50%;
	margin: 0;
	width: 100%;
	position: absolute;
	border: 1px solid #fff;
`;

export const CircleField = styled.div`
	left: 50%;
	top: 50%;
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	position: absolute;
	border: 2px solid #fff;
	transform: translate(-50%, -50%);
`;

export const Player = styled.div<{
	x: string;
	y: string;
}>`
	width: 3rem;
	height: 3rem;
	display: flex;
	cursor: pointer;
	border-radius: 50%;
	position: absolute;
	align-items: center;
	background-color: #fff;
	justify-content: center;
	top: ${(props) => props.y};
	left: ${(props) => props.x};
	transition: all 0.1s ease-in-out;
	transform: translate(-50%, -50%);
	&:hover {
		opacity: 0.8;
	}
`;

export const ResponsePlayers = styled.div`
	overflow-x: auto;
	max-height: 30rem;
	flex-direction: column;

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
	&::-webkit-scrollbar {
		width: 3px;
		background-color: #f5f5f5;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #000000;
	}
`;

export const PlayerItem = styled.div`
	cursor: pointer;
	border: 1px dashed #efebeb;
	padding: 0.5rem 2.5rem 0.5rem 1rem;
	background: linear-gradient(0deg, #e5e5e5, #f8f8f8);
	margin: 0.5rem 0;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const InfosPlayer = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
`;

export const InfoPlayer = styled.div`
	display: flex;
`;

export const LabelInfo = styled.h5`
	margin: 0 0.3rem 0 0;
	color: #000000;
	font-weight: 600;
`;

export const InfoPlayerText = styled.p`
	margin: 0;
	color: crimson;
	font-size: 0.83em;
	font-weight: 500;
`;

export const Submit = styled.button`
	color: #fff;
	width: 100%;
	cursor: pointer;
	font-weight: 500;
	padding: 0.7rem 0;
	font-size: 1.4rem;
	margin-bottom: 1rem;
	border: 1px solid red;
	border-radius: 0.2rem;
	box-shadow: 0px 9px 1px #8e1f6d12;
	background: linear-gradient(0deg, #782966, #9a3164);
	&:focus {
		outline: none;
	}
`;
