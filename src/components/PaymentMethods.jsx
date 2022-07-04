import MaestroIcon from './icons/MaestroIcon';
import MasterCardIcon from './icons/MasterCardIcon';
import VisaIcon from './icons/VisaIcon';
import style from './PaymentMethods.module.css';

const PaymentMethods = () => (
	<div className={style.wrapper}>
		<div>
			<MaestroIcon />
			<MasterCardIcon />
			<VisaIcon />
		</div>
		<hr className={style.underline}></hr>
	</div>
);

export default PaymentMethods;
