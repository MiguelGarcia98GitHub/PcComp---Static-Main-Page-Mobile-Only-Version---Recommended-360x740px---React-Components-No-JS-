import style from './PcCompIn.module.css';

const PcCompIn = () => (
	<div className={style.wrapper}>
		<div className={style.title}>PcComp en</div>
		<select className={style.select}>
			<option>España</option>
			<option>Portugal</option>
		</select>
	</div>
);

export default PcCompIn;
