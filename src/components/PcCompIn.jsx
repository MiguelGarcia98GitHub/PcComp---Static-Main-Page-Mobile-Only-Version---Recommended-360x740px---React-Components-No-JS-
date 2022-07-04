import style from './PcCompIn.module.css';

const PcCompIn = () => (
	<div className={style.wrapper}>
		<div className={style.subwrapper}>
			<div className={style.title}>PcComp en</div>
			<select className={style.select}>
				<option>España</option>
				<option>Portugal</option>
			</select>
		</div>
	</div>
);

export default PcCompIn;
