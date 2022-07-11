import React, { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Add from "../../../Assets/plusBlack.png";
import { TeamService } from "../../../Services";
import { formations } from "../../../Utils/formations";
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

const EditTeam: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<any>({
		defaultValues: {},
	});
	const { id } = useParams();
	const [tags, setTags] = useState<any[]>([]);
	const [playersTeam, setPlayersTeam] = useState<any[]>([]);
	const [dataDefault, setDataDefault] = useState<any>(null);
	const [searchText, setSearchText] = useState<string>("ronaldo");
	const [formationSelected, setFormationSelected] = useState<number>(0);
	const [playersFormation, setPlayersFormation] = useState<Record<string, any>>(
		{}
	);

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
				id: dataDefault.id,
				tags: tags,
				players: playersFormation,
				formation: formations[formationSelected].form,
			};
			let _storagedValues = [];
			try {
				const _value = localStorage.getItem("data");
				_storagedValues = JSON.parse(_value || "[]");
			} catch {}
			let indexTeam = _storagedValues
				.map((x: any) => {
					return x.id;
				})
				.indexOf(newTeam.id);
			_storagedValues[indexTeam] = newTeam;
			localStorage.setItem("data", JSON.stringify(_storagedValues));
			toast.success("Team edited successfully.", {
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

	const playersSquad = useMemo(() => {
		return (
			formations[formationSelected ? formationSelected : 0].players || []
		).map((formations) => (
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

	useEffect(() => {
		const teams: any[] = JSON.parse(localStorage.getItem("data")!);
		const _data = teams.find((value) => {
			return value.id === id ? value : null;
		});
		const formationIndex = formations
			.map((x: any) => {
				return x.form;
			})
			.indexOf(_data.formation);
		setTags(_data.tags);
		setValue("name", _data.name);
		setValue("type", _data.type);
		setValue("teamUrl", _data.teamUrl);
		setValue("description", _data.description);
		setFormationSelected(formationIndex);
		setPlayersFormation(_data.players);
		setDataDefault(_data);
	}, []);
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
							<Label>Team Name</Label>
							<Input
								type={"text"}
								{...register("name", { required: true, maxLength: 128 })}
							/>
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
											{...register("type", { required: true })}
											id="typeTeam"
											type={"radio"}
											value={"real"}
											name="type"
											placeholder={"Real"}
										/>
										<RadioLabel htmlFor="typeTeam">Real</RadioLabel>
									</ContainerRadios>

									<ContainerRadios>
										<Radio
											{...register("type", { required: true })}
											id="typeTeam"
											type={"radio"}
											value={"fantasy"}
											name="type"
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
						<Submit onClick={handleSubmit(onSubmit)}>Update</Submit>
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

export default EditTeam;
