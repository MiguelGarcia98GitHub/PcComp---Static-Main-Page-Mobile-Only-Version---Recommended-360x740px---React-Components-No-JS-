import style from './MonitorsRaffle.module.css';

const MonitorsRaffle = () => (
	<div className={style.wrapper}>
		<div className={style.titletext}>
			Sorteamos 2 fantásticos monitores gaming
		</div>
		<div className={style.textwrapper}>
			Participa y llévate uno de estos Lenovo Legion Y25g-30 de 24.5"
		</div>
		<div className={style.share}>Compartir</div>
		<div className={style.socials}>
			<div className={style.socialicon}>
				<img src='twitter.png' alt='twitter image' />
			</div>
			<div className={style.socialicon}>
				<img src='facebook.png' alt='facebook image' />
			</div>
			<div className={style.socialicon}>
				<img src='whatsapp.png' alt='whatsapp image' />
			</div>
			<div className={style.socialicon}>
				<img src='telegram.png' alt='telegram image' />
			</div>
		</div>
		<div className={style.ruffletitle}>
			<div className={style.ruffletitletext}>SORTEAZO</div>
			<div className={style.ruffletitleunderline}></div>
		</div>
		<div className={style.rufflevaluedinwrapper}>
			<div className={style.rufflevaluedin}>valorado en</div>
			<div className={style.rufflevalue}>1400 €</div>
		</div>
		<div className={style.monitorsimagewrapper}>
			<img
				src='monitors_raffle.webp'
				alt='image of two monitors'
				className={style.monitorsimage}
			/>
		</div>
		<div className={style.formboxwrapper}>
			<div className={style.formbox}>
				<div className={style.formboxtitle}>¡Subscríbete y gana!</div>
				<div className={style.formboxsubtitle}>
					¡Uno de estos monitores puede ser tuyo!
				</div>
				<div className={style.inputemailwrapper}>
					<input className={style.inputemail} type='email' />
				</div>
				<div className={style.maintext}>
					<input
						className={style.checkbox}
						type='checkbox'
						name='test'
						id='checkbox1'
					/>
					He leído y acepto las{' '}
					<span className={style.orangetext}> bases del sorteo</span>,
					<span className={style.orangetext}> condiciones generales</span> y la
					<span className={style.orangetext}> política de privacidad</span> de
					PcComp y acepto recibir comunicaciones comerciales de PcComp y/o de
					terceros con los que colaboramos.
				</div>
				<div className={style.joinbutton}>¡Participa!</div>
			</div>
		</div>
	</div>
);

export default MonitorsRaffle;
