import styles from './Welcome.module.scss';

const Welcome = () => {
	console.log('Welcome');

	return (
		<div className={styles.root}>
			<p className="abc">Welcome</p>
			<p className={styles.abc}>Welcome</p>
		</div>
	);
};

export default Welcome;
