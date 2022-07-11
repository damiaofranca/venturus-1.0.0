export interface TeamEntenty {
	id: string;
	name: string;
	type: string;
	teamUrl: string;
	tags?: string[];
	avgAge: number;
	players: Player[];
	formation: number[];
	description?: string;
}

export interface Player {
	age: 23;
	id: number;
	name: string;
	photo: string;
	injured: boolean;
	lastname: string;
	firstname: string;
	nationality: string;
	height: null | number;
	weight: null | number;
	birth: { date: Date; place: string | null; country: string };
}
