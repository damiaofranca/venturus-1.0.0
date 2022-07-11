interface Player {
	key: string;
	position: {
		x: string;
		y: string;
	};
}

interface Formation {
	form: string;
	players?: Player[];
}

export const formations: Formation[] = [
	{
		form: "3 - 2 - 2 - 3",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "25%",
					y: "80%",
				},
			},
			{
				key: "3",
				position: {
					x: "40%",
					y: "65%",
				},
			},
			{
				key: "4",
				position: {
					x: "75%",
					y: "80%",
				},
			},
			{
				key: "5",
				position: {
					x: "60%",
					y: "65%",
				},
			},
			{
				key: "6",
				position: {
					x: "50%",
					y: "75%",
				},
			},
			{
				key: "7",
				position: {
					x: "50%",
					y: "15%",
				},
			},
			{
				key: "8",
				position: {
					x: "14%",
					y: "18%",
				},
			},
			{
				key: "9",
				position: {
					x: "86%",
					y: "18%",
				},
			},

			{
				key: "10",
				position: {
					x: "33%",
					y: "36%",
				},
			},

			{
				key: "11",
				position: {
					x: "68%",
					y: "36%",
				},
			},
		],
	},
	{
		form: "3 - 2 - 3 - 1",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "25%",
					y: "77%",
				},
			},
			{
				key: "3",
				position: {
					x: "50%",
					y: "77%",
				},
			},
			{
				key: "4",
				position: {
					x: "75%",
					y: "77%",
				},
			},
			{
				key: "5",
				position: {
					x: "63%",
					y: "55%",
				},
			},
			{
				key: "6",
				position: {
					x: "38%",
					y: "55%",
				},
			},
			{
				key: "7",
				position: {
					x: "50%",
					y: "36%",
				},
			},
			{
				key: "8",
				position: {
					x: "50%",
					y: "18%",
				},
			},

			{
				key: "9",
				position: {
					x: "33%",
					y: "36%",
				},
			},

			{
				key: "10",
				position: {
					x: "68%",
					y: "36%",
				},
			},
		],
	},
	{
		form: "3 - 4 - 3",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "25%",
					y: "75%",
				},
			},
			{
				key: "3",
				position: {
					x: "50%",
					y: "77%",
				},
			},
			{
				key: "4",
				position: {
					x: "75%",
					y: "75%",
				},
			},
			{
				key: "5",
				position: {
					x: "65%",
					y: "50%",
				},
			},
			{
				key: "6",
				position: {
					x: "35%",
					y: "50%",
				},
			},
			{
				key: "7",
				position: {
					x: "15%",
					y: "20%",
				},
			},
			{
				key: "8",
				position: {
					x: "50%",
					y: "14%",
				},
			},

			{
				key: "9",
				position: {
					x: "15%",
					y: "36%",
				},
			},

			{
				key: "10",
				position: {
					x: "85%",
					y: "36%",
				},
			},

			{
				key: "11",
				position: {
					x: "85%",
					y: "20%",
				},
			},
		],
	},
	{
		form: "3 - 5 - 2",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "25%",
					y: "80%",
				},
			},
			{
				key: "3",
				position: {
					x: "50%",
					y: "80%",
				},
			},
			{
				key: "4",
				position: {
					x: "75%",
					y: "80%",
				},
			},
			{
				key: "5",
				position: {
					x: "90%",
					y: "50%",
				},
			},
			{
				key: "6",
				position: {
					x: "10%",
					y: "50%",
				},
			},
			{
				key: "7",
				position: {
					x: "35%",
					y: "30%",
				},
			},
			{
				key: "8",
				position: {
					x: "72%",
					y: "50%",
				},
			},

			{
				key: "9",
				position: {
					x: "28%",
					y: "50%",
				},
			},

			{
				key: "10",
				position: {
					x: "50%",
					y: "50%",
				},
			},

			{
				key: "11",
				position: {
					x: "65%",
					y: "30%",
				},
			},
		],
	},
	{
		form: "4 - 2 - 3 - 1",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "10%",
					y: "80%",
				},
			},
			{
				key: "3",
				position: {
					x: "35%",
					y: "80%",
				},
			},
			{
				key: "4",
				position: {
					x: "65%",
					y: "80%",
				},
			},
			{
				key: "5",
				position: {
					x: "90%",
					y: "80%",
				},
			},
			{
				key: "6",
				position: {
					x: "35%",
					y: "65%",
				},
			},
			{
				key: "7",
				position: {
					x: "65%",
					y: "65%",
				},
			},
			{
				key: "8",
				position: {
					x: "72%",
					y: "50%",
				},
			},

			{
				key: "9",
				position: {
					x: "28%",
					y: "50%",
				},
			},

			{
				key: "10",
				position: {
					x: "50%",
					y: "50%",
				},
			},

			{
				key: "11",
				position: {
					x: "50%",
					y: "30%",
				},
			},
		],
	},
	{
		form: "4 - 3 - 1 - 1",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "10%",
					y: "80%",
				},
			},
			{
				key: "3",
				position: {
					x: "35%",
					y: "80%",
				},
			},
			{
				key: "4",
				position: {
					x: "65%",
					y: "80%",
				},
			},
			{
				key: "5",
				position: {
					x: "90%",
					y: "80%",
				},
			},
			{
				key: "6",
				position: {
					x: "22%",
					y: "65%",
				},
			},
			{
				key: "7",
				position: {
					x: "78%",
					y: "65%",
				},
			},
			{
				key: "8",
				position: {
					x: "50%",
					y: "65%",
				},
			},

			{
				key: "9",
				position: {
					x: "50%",
					y: "50%",
				},
			},

			{
				key: "10",
				position: {
					x: "50%",
					y: "35%",
				},
			},
		],
	},
	{
		form: "4 - 3 - 2",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "10%",
					y: "80%",
				},
			},
			{
				key: "3",
				position: {
					x: "35%",
					y: "80%",
				},
			},
			{
				key: "4",
				position: {
					x: "65%",
					y: "80%",
				},
			},
			{
				key: "5",
				position: {
					x: "90%",
					y: "80%",
				},
			},
			{
				key: "6",
				position: {
					x: "22%",
					y: "65%",
				},
			},
			{
				key: "7",
				position: {
					x: "78%",
					y: "65%",
				},
			},
			{
				key: "8",
				position: {
					x: "50%",
					y: "65%",
				},
			},

			{
				key: "9",
				position: {
					x: "35%",
					y: "50%",
				},
			},

			{
				key: "10",
				position: {
					x: "65%",
					y: "50%",
				},
			},
		],
	},
	{
		form: "4 - 4 - 2",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "10%",
					y: "80%",
				},
			},
			{
				key: "3",
				position: {
					x: "35%",
					y: "80%",
				},
			},
			{
				key: "4",
				position: {
					x: "65%",
					y: "80%",
				},
			},
			{
				key: "5",
				position: {
					x: "90%",
					y: "80%",
				},
			},
			{
				key: "6",
				position: {
					x: "10%",
					y: "65%",
				},
			},
			{
				key: "7",
				position: {
					x: "35%",
					y: "65%",
				},
			},
			{
				key: "8",
				position: {
					x: "65%",
					y: "65%",
				},
			},
			{
				key: "9",
				position: {
					x: "90%",
					y: "65%",
				},
			},
			{
				key: "10",
				position: {
					x: "35%",
					y: "50%",
				},
			},
			{
				key: "11",
				position: {
					x: "65%",
					y: "50%",
				},
			},
		],
	},
	{
		form: "4 - 5 - 1",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "10%",
					y: "80%",
				},
			},
			{
				key: "3",
				position: {
					x: "35%",
					y: "80%",
				},
			},
			{
				key: "4",
				position: {
					x: "65%",
					y: "80%",
				},
			},
			{
				key: "5",
				position: {
					x: "90%",
					y: "80%",
				},
			},
			{
				key: "6",
				position: {
					x: "10%",
					y: "65%",
				},
			},
			{
				key: "7",
				position: {
					x: "30%",
					y: "65%",
				},
			},
			{
				key: "8",
				position: {
					x: "50%",
					y: "65%",
				},
			},
			{
				key: "9",
				position: {
					x: "70%",
					y: "65%",
				},
			},
			{
				key: "10",
				position: {
					x: "90%",
					y: "65%",
				},
			},
			{
				key: "11",
				position: {
					x: "50%",
					y: "50%",
				},
			},
		],
	},
	{
		form: "5 - 4 -1",
		players: [
			{
				key: "1",
				position: {
					x: "50%",
					y: "92%",
				},
			},
			{
				key: "2",
				position: {
					x: "10%",
					y: "80%",
				},
			},
			{
				key: "3",
				position: {
					x: "30%",
					y: "80%",
				},
			},
			{
				key: "4",
				position: {
					x: "50%",
					y: "80%",
				},
			},
			{
				key: "5",
				position: {
					x: "70%",
					y: "80%",
				},
			},
			{
				key: "6",
				position: {
					x: "90%",
					y: "80%",
				},
			},
			{
				key: "7",
				position: {
					x: "10%",
					y: "65%",
				},
			},
			{
				key: "8",
				position: {
					x: "35%",
					y: "65%",
				},
			},
			{
				key: "9",
				position: {
					x: "65%",
					y: "65%",
				},
			},
			{
				key: "10",
				position: {
					x: "90%",
					y: "65%",
				},
			},
			{
				key: "11",
				position: {
					x: "50%",
					y: "50%",
				},
			},
		],
	},
];
