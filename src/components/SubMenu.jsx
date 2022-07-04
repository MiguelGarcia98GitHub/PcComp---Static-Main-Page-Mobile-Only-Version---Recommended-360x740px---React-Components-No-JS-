import ComputerIcon from './icons/ComputerIcon';
import PackageIcon from './icons/PackageIcon';
import SpinningArrowsIcon from './icons/SpinningArrowsIcon';
import TagIcon from './icons/TagIcon';
import style from './SubMenu.module.css';

const SubMenu = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.item}>
				<div className={style.itemicon}>
					<TagIcon />
				</div>
				<div className={style.itemtext}>OFERTAS ESPECIALES</div>
			</div>
			<div className={style.item}>
				<div className={style.itemicon}>
					<ComputerIcon />
				</div>
				<div className={style.itemtext}>ORDENADORES ESCRITORIO</div>
			</div>
			<div className={style.item}>
				<div className={style.itemicon}>
					<PackageIcon />
				</div>
				<div className={style.itemtext}>PROMOCIONES</div>
			</div>
			<div className={style.item}>
				<div className={style.itemicon}>
					<SpinningArrowsIcon />
				</div>
				<div className={style.itemtext}>REACONDICIONADOS</div>
			</div>
		</div>
	);
};

export default SubMenu;
