import style from './TitleOne.module.css';

const TitleOne = () => (
	<div className={style.wrapper}>
		<hr />
		<div className={style.subwrapper}>
			Tu <b>tienda online experta en tecnología</b>
		</div>
		<hr />
	</div>
);

export default TitleOne;
