import { useState } from "react";
import { GameLayout } from "./game-layout";
import { handleCellClick } from "./handlers";
import { STATUS, PLAYER } from "./constants";

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(new Array(9).fill(PLAYER.NOBODY));

	const state = {
		status,
		setStatus,
		currentPlayer,
		setCurrentPlayer,
		field,
		setField,
	};

	const handleaRestart = () => {
		setStatus(STATUS.TURN);
		setCurrentPlayer(PLAYER.CROSS);
		setField(new Array(9).fill(PLAYER.NOBODY));
	};

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={(cellIndex) => handleCellClick(state, cellIndex)}
			handleRestart={handleaRestart}
		/>
	);
};
