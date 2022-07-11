import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
	BackgroundModal,
	Cancel,
	Content,
	Delete,
	Footer,
	Modal,
	Title,
} from "./styles";

interface DeleteTeam {
	id: string;
	isOpen: boolean;
	onCancel: (value: boolean) => void;
}

export const DeleteTeam: React.FC<DeleteTeam> = ({ onCancel, isOpen, id }) => {
	const [teams, setTeams] = useState<any[]>([]);
	const [teamIndex, setTeamIndex] = useState<number>(0);

	const onsubmit = () => {
		teams.splice(teamIndex, 1);
		localStorage.setItem("data", JSON.stringify(teams));
		toast.success("Team deleted with successfully.", {
			position: "top-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		onCancel(false);
	};

	useEffect(() => {
		const teams: any[] = JSON.parse(localStorage.getItem("data")!);
		setTeams(teams);
		setTeamIndex(
			teams
				.map((x: any) => {
					return x.id;
				})
				.indexOf(id)
		);
	}, [id]);
	return isOpen ? (
		<BackgroundModal>
			<Modal>
				<Title>Delete team</Title>
				<Content>You want to delete this team ?</Content>
				<Footer>
					<Cancel
						onClick={() => {
							onCancel(false);
						}}
					>
						Cancel
					</Cancel>
					<Delete onClick={onsubmit}>Delete</Delete>
				</Footer>
			</Modal>
		</BackgroundModal>
	) : (
		<></>
	);
};
