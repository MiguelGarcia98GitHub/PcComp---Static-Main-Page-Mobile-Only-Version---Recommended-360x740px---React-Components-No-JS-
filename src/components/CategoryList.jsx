import style from './CategoryList.module.css';

const CategoryList = () => (
	<div className={style.wrapper}>
		<div className={style.subwrapper}>
			<div>
				<img className={style.image} alt='Portátiles' src='category1.png' />
			</div>
			<div className={style.textwrapper}>
				<b>Portátiles</b>
			</div>
		</div>
		<div className={style.subwrapper}>
			<div>
				<img className={style.image} alt='Sobremesa' src='category2.png'></img>
			</div>
			<div className={style.textwrapper}>
				<b>Sobremesa</b>
			</div>
		</div>
		<div className={style.subwrapper}>
			<div>
				<img className={style.image} alt='Monitores' src='category3.png'></img>
			</div>
			<div className={style.textwrapper}>
				<b>Monitores</b>
			</div>
		</div>
		<div className={style.subwrapper}>
			<div>
				<img className={style.image} alt='Móviles' src='category4.png'></img>
			</div>
			<div className={style.textwrapper}>
				<b>Smartphones</b>
			</div>
		</div>
		<div className={style.subwrapper}>
			<div>
				<img className={style.image} alt='Televisores' src='category5.png' />
			</div>
			<div className={style.textwrapper}>
				<b>Televisores</b>
			</div>
		</div>
		<div className={style.subwrapper}>
			<div>
				<img
					className={style.image}
					alt='Tarjetas Gráficas'
					src='category6.png'
				/>
			</div>
			<div className={style.textwrapper}>
				<b>Tarjetas gráficas</b>
			</div>
		</div>
	</div>
);

export default CategoryList;
