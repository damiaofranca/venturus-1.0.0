import React, { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { formations } from "../../../Utils/formations";
import Add from "../../../Assets/plusBlack.png";
import { toast } from "react-toastify";
import {
	CircleField,
	ConfigureSquad,
	ConfigureSquadTitle,
	Container,
	ContainerRadios,
	ContainerRadiosWrap,
	Description,
	Field,
	FirstConfig,
	FirstInformation,
	Form,
	FormItemContainer,
	FormItemRadioContainer,
	HeaderContainer,
	InfoPlayer,
	InfoPlayerText,
	InfosPlayer,
	Input,
	Label,
	LabelInfo,
	MidField,
	OptionSelect,
	Player,
	PlayerItem,
	Radio,
	RadioLabel,
	ResponsePlayers,
	SecondConfig,
	SecondInformation,
	SelectFormation,
	Submit,
	SubTitle,
	Tags,
	TeamInformation,
	TitleHeaderContainer,
	Wrapper,
} from "./styles";
import { TeamService } from "../../../Services";

const AddTeam: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<any>();
	const [tags, setTags] = useState<any[]>([]);
	const [searchText, setSearchText] = useState<string>("ronaldo");
	const [playersTeam, setPlayersTeam] = useState<any[]>([]);
	const [formationSelected, setFormationSelected] = useState<number>(0);
	const [playersFormation, setPlayersFormation] = useState<Record<string, any>>(
		{}
	);

	const onSubmit: SubmitHandler<any> = (data: any) => {
		if (
			data &&
			Object.keys(playersFormation).length ===
				(formationSelected
					? formations[formationSelected].players?.length
					: formations[0].players?.length)
		) {
			const newTeam = {
				...data,

				id: crypto.randomUUID(),
				tags: tags,
				players: playersFormation,
				formation: formations[formationSelected].form,
			};
			let _storagedValues = [];
			try {
				const _value = localStorage.getItem("data");
				_storagedValues = JSON.parse(_value || "[]");
			} catch {}
			// _storagedValues.push(newTeam);
			// localStorage.setItem("data", JSON.stringify(_storagedValues));
			setTags([]);
			setValue("name", "");
			setValue("type", "");
			setValue("teamUrl", "");
			setValue("description", "");
			setFormationSelected(0);
			setPlayersFormation({});
			toast.success("Team created successfully.", {
				position: "top-right",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const fetchPlayers = async (name: string) => {
		try {
			const response = await TeamService.fetchPlayers(name);
			setPlayersTeam(response.response);
		} catch (error) {
			throw error;
		}
	};

	const setFormation = (value: any) => {
		if (formationSelected !== value) {
			setFormationSelected(value);
			setPlayersFormation({});
		}
	};

	const onDropped = (ev: React.DragEvent<HTMLDivElement>, formation: any) => {
		ev.preventDefault();
		const player = ev.dataTransfer.getData("player");
		try {
			const _player = JSON.parse(player);
			setPlayersFormation({ ...playersFormation, [formation.key]: _player });
		} catch {}
	};

	const onDragStarted = (ev: React.DragEvent<HTMLDivElement>, value: any) => {
		ev.dataTransfer.setData("player", JSON.stringify(value.player));
	};

	const getFirstLetters = (text: string) => {
		return `${text.split(" ")[0][0]}${text.split(" ")[1][0]}`;
	};

	const playersSquad = useMemo(() => {
		return (
			formations[formationSelected ? formationSelected : 0].players || []
		).map((formations, index) => (
			<Player
				key={formations.key}
				x={formations.position.x}
				y={formations.position.y}
				className={`${formations.key}`}
				onDrop={(e) => onDropped(e, formations)}
				onDragOver={(ev) => ev.preventDefault()}
			>
				{playersFormation[formations.key] ? (
					playersFormation[formations.key].name ? (
						getFirstLetters(playersFormation[formations.key].name)
					) : (
						"..."
					)
				) : (
					<img src={Add} alt="add icon" />
				)}
			</Player>
		));
	}, [formationSelected, playersFormation]);

	const playersList = useMemo(() => {
		return playersTeam.length > 0
			? playersTeam
					.filter(
						(value) =>
							!Object.keys(playersFormation).some(
								(key) => playersFormation[key]?.id === value.player.id
							)
					)
					.map((value) => (
						<PlayerItem
							draggable
							key={value.player.id}
							onDragStart={(ev) => onDragStarted(ev, value)}
						>
							<InfosPlayer>
								<InfoPlayer>
									<LabelInfo>Name:</LabelInfo>
									<InfoPlayerText>{value.player.name}</InfoPlayerText>
								</InfoPlayer>
								<InfoPlayer>
									<LabelInfo>Age:</LabelInfo>
									<InfoPlayerText>{value.player.age}</InfoPlayerText>
								</InfoPlayer>
							</InfosPlayer>
							<InfosPlayer>
								<InfoPlayer>
									<LabelInfo>Nacionality:</LabelInfo>
									<InfoPlayerText>{value.player.nationality}</InfoPlayerText>
								</InfoPlayer>
							</InfosPlayer>
						</PlayerItem>
					))
			: null;
	}, [playersTeam, formationSelected, playersFormation]);

	useEffect(() => {
		const debounceFn = setTimeout(() => {
			fetchPlayers(searchText);
		}, 400);
		return () => clearTimeout(debounceFn);
	}, [searchText]);

	return (
		<Container>
			<HeaderContainer>
				<TitleHeaderContainer>CREATE YOUR TEAM</TitleHeaderContainer>
			</HeaderContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<SubTitle>TEAM INFORMATION</SubTitle>
				<TeamInformation>
					<FirstInformation>
						<FormItemContainer>
							<Input
								type={"text"}
								{...register("name", { required: true, maxLength: 128 })}
							/>
							<Label>Team Name</Label>
						</FormItemContainer>
						<FormItemContainer>
							<Label>Description</Label>
							<Description {...register("description")} />
						</FormItemContainer>
					</FirstInformation>
					<SecondInformation>
						<Wrapper>
							<FormItemContainer>
								<Label>Team Website</Label>
								<Input
									type={"url"}
									{...register("teamUrl", { required: true, maxLength: 128 })}
								/>
							</FormItemContainer>
							<FormItemRadioContainer>
								<Label>Team Type</Label>
								<ContainerRadiosWrap>
									<ContainerRadios>
										<Radio
											id="typeTeam"
											type={"radio"}
											value={"real"}
											{...register("type", { required: true })}
											placeholder={"Real"}
										/>
										<RadioLabel htmlFor="typeTeam">Real</RadioLabel>
									</ContainerRadios>

									<ContainerRadios>
										<Radio
											id="typeTeam"
											type={"radio"}
											value={"fantasy"}
											{...register("type", { required: true })}
											placeholder={"Real"}
										/>
										<RadioLabel htmlFor="typeTeam">Fantasy</RadioLabel>
									</ContainerRadios>
								</ContainerRadiosWrap>
							</FormItemRadioContainer>
						</Wrapper>
						<FormItemContainer>
							<Label>Tags</Label>
							<Tags
								value={tags}
								onChange={(tagsNew) => {
									setTags(tagsNew);
								}}
							/>
						</FormItemContainer>
					</SecondInformation>
				</TeamInformation>
				<ConfigureSquadTitle>CONFIGURE SQUAD</ConfigureSquadTitle>
				<ConfigureSquad>
					<FirstConfig>
						<FormItemContainer>
							<Label>
								Formation
								<SelectFormation
									placeholder="Select a formation"
									onChange={(event) => {
										setFormation(event.target.value);
									}}
								>
									{formations.map((value, index) => (
										<OptionSelect key={index} value={index}>
											{value.form}
										</OptionSelect>
									))}
								</SelectFormation>
							</Label>
							<Field>
								<MidField></MidField>
								<CircleField></CircleField>
								{playersSquad}
							</Field>
						</FormItemContainer>
						<Submit onClick={handleSubmit(onSubmit)}>Save</Submit>
					</FirstConfig>
					<SecondConfig>
						<FormItemContainer>
							<Label>Search Players</Label>
							<Input
								type={"text"}
								placeholder={"Type to search..."}
								onChange={(event) => {
									setSearchText(event.target.value.toLowerCase());
								}}
							/>
							<ResponsePlayers>{playersList}</ResponsePlayers>
						</FormItemContainer>
					</SecondConfig>
				</ConfigureSquad>
			</Form>
		</Container>
	);
};

export default AddTeam;
