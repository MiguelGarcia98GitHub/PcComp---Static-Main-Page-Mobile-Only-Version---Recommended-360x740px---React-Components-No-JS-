import style from './PcDaysCounter.module.css';

const PcDaysCounter = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.text}>PcDays: ¡Quedan 7 días de rebajas!</div>
		</div>
	);
};

export default PcDaysCounter;
