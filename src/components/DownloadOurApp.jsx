import style from './DownloadOurApp.module.css';

const DownloadOurApp = () => (
	<div className={style.wrapper}>
		<div className={style.title}>Descarga nuestra App</div>
		<div className={style.subwrapper}>
			<div>
				<img className={style.image} src='./android_opt.svg' alt='' />
			</div>
			<div className={style.text}>Descarga app en Google Play</div>
		</div>
		<div className={style.subwrapper}>
			<div className={style.imagecontainer}>
				<img className={style.image} src='./apple_opt.svg' alt='' />
			</div>
			<div className={style.text}>Descarga app en App Store</div>
		</div>
		<hr />
	</div>
);

export default DownloadOurApp;
