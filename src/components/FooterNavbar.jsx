import style from './FooterNavbar.module.css';

const FooterNavbar = () => (
	<div className={style.wrapper}>
		<div className={style.subwrapper}>
			<div className={style.cardtext}>Por qué comprar</div>
			<div className={style.plusicon}>+</div>
		</div>
		<hr className={style.underline} />
		<div className={style.subwrapper}>
			<div className={style.cardtext}>Quiénes somos</div>
			<div className={style.plusicon}>+</div>
		</div>
		<hr className={style.underline} />
		<div className={style.subwrapper}>
			<div className={style.cardtext}>Contactar</div>
			<div className={style.plusicon}>+</div>
		</div>
		<hr className={style.underline} />
		<div className={style.subwrapper}>
			<div className={style.cardtext}>Otros</div>
			<div className={style.plusicon}>+</div>
		</div>
		<hr className={style.underline} />
		<div className={style.subwrapper}>
			<div className={style.cardtext}>Comunidad</div>
			<div className={style.plusicon}>+</div>
		</div>
		<hr className={style.underline} />
	</div>
);

export default FooterNavbar;
