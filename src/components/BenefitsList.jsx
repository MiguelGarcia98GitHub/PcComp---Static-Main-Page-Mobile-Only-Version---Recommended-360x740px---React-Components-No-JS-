import style from './BenefitsList.module.css';

const BenefitsList = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.subwrapper}>
				<div>
					<img width='64' height='64' src='./truckdelivery.png' />
				</div>
				<div className={style.textwrapper}>
					<b>Envíos gratuitos</b> en pedidos superiores a 40 €
				</div>
			</div>
			<div className={style.subwrapper}>
				<div>
					<img width='64' height='64' src='./hold.png' />
				</div>
				<div className={style.textwrapper}>
					Recibe tu pedido en <b>24-48 horas</b>
				</div>
			</div>
			<div className={style.subwrapper}>
				<div>
					<img width='64' height='64' src='./refresh.png' />
				</div>
				<div className={style.textwrapper}>
					<b>Devoluciones gratuitas</b> y garantía de sustitución en máximo 24
					horas
				</div>
			</div>
		</div>
	);
};

export default BenefitsList;
