import styles from "./information.module.css";

export const InformationLayout = ({ information }) => (
	<div className={styles.information}>{information}</div>
);
