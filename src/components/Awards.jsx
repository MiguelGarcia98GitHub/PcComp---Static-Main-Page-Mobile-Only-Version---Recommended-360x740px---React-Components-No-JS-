import style from './Awards.module.css';

const Awards = () => (
	<div className={style.wrapper}>
		<div className={style.subwrapper}>
			<div className={style.awardonecontainer}>
				<img className={style.image} src='./award1.png' alt='Award' />
			</div>
			<div className={style.awardtwocontainer}>
				<img className={style.image} src='./award2.png' alt='Award' />
			</div>
		</div>
	</div>
);

export default Awards;
