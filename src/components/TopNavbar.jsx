import BoxIcon from './icons/BoxIcon';
import BurguerIcon from './icons/BurguerIcon';
import CartIcon from './icons/CartIcon';
import MainLogo from './icons/MainLogo';
import SearchIcon from './icons/SearchIcon';
import UserIcon from './icons/UserIcon';
import style from './TopNavbar.module.css';

const TopNavbar = () => (
	<div className={style.wrapper}>
		<div className={style.subwrapperleft}>
			<div className={style.burguerwrapper}>
				<BurguerIcon />
			</div>
			<div className={style.logowrapper}>
				<MainLogo />
			</div>
		</div>
		<div className={style.subwrapperright}>
			<div>
				<div>
					<SearchIcon />
				</div>
			</div>
			<div>
				<BoxIcon />
			</div>
			<div>
				<UserIcon />
			</div>
			<div>
				<CartIcon />
			</div>
		</div>
	</div>
);

export default TopNavbar;
