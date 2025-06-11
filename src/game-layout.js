import { Field, Information } from "./components";
import styles from "./game.module.css";

export const GameLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	handleRestart,
}) => (
	<div className={styles.game}>
		<Information status={status} currentPlayer={currentPlayer} />
		<Field field={field} handleCellClick={handleCellClick} />
		<button className={styles.restartButton} onClick={handleRestart}>
			Начать заново
		</button>
	</div>
);
