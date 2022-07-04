import style from './BlogList.module.css';

const BlogList = () => (
	<div className={style.wrapper}>
		<div className={style.subwrapper}>
			<div className={style.imagewrapper}>
				<img
					className={style.image}
					src='blog1.png'
					alt='persona escribiendo en un portátil'
				/>
			</div>
			<div className={style.textboxwrapper}>
				<div className={style.textbox}>
					<div className={style.titletext}>
						Cómo elegir un buen portátil por 500 euros o menos
					</div>
					<div className={style.text}>
						Encontrar un ordenador portátil bueno por 500 euros o menos es
						posible si escoges las características apropiadas en cada modelo.
					</div>
				</div>
			</div>
		</div>
		<div className={style.subwrapper}>
			<div className={style.imagewrapper}>
				<img
					className={style.image}
					src='blog2.png'
					alt='persona tomando cafe y sonriendo enfrente de un portatil'
				/>
			</div>
			<div className={style.textboxwrapper}>
				<div className={style.textbox}>
					<div className={style.titletext}>
						Mejores portátiles calidad precio 2022
					</div>
					<div className={style.text}>
						¿Estás buscando portátiles con una relación calidad precio
						excelente? En este artículo te recomendamos algunos de los más
						populares del mercado.
					</div>
				</div>
			</div>
		</div>
		<div className={style.subwrapper}>
			<div className={style.imagewrapper}>
				<img
					className={style.image}
					src='blog3.png'
					alt='edificio con logo de apple'
				/>
			</div>
			<div className={style.textboxwrapper}>
				<div className={style.textbox}>
					<div className={style.titletext}>
						Apple iPhone 14: fecha de lanzamiento, precio, qué podemos esperar
					</div>
					<div className={style.text}>
						Descubre las últimas novedades y noticias que rodean el lanzamiento
						del nuevo Apple iPhone 14 que llegará a finales de verano
						presuntamente.
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default BlogList;
