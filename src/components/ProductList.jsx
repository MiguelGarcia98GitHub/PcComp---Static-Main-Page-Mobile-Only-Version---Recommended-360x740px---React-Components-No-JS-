import style from './ProductList.module.css';

const ProductList = () => (
	<div className={style.wrapper}>
		<div className={style.itemwrapper}>
			<div className={style.itemimagewrapper}>
				<img className={style.image} alt='laptop image' src='./laptop1.jpg' />
				<span className={style.promotion}>PROMOCIÓN</span>
			</div>
			<div className={style.itemnamewrapper}>
				Asus TUF Gaming F15 FX506HE-HN012 Intel
			</div>
			<div className={style.itempricewrapper}>849.00 €</div>
			<div className={style.itemdiscountwrapper}>
				<div className={style.discountpricewrapper}>1139.01 €</div>
				<div className={style.redboxdiscountwrapper}>
					<span className={style.redboxdiscount}>25%</span>
				</div>
			</div>
		</div>
		<div className={style.itemwrapper}>
			<div className={style.itemimagewrapper}>
				<img className={style.image} alt='laptop image' src='./laptop2.jpg' />
				<span className={style.promotion}>PROMOCIÓN</span>
			</div>
			<div className={style.itemnamewrapper}>
				HP Victus 16-e0067ns AMD Ryzen 7
			</div>
			<div className={style.itempricewrapper}>799.00 €</div>
			<div className={style.itemdiscountwrapper}>
				<div className={style.discountpricewrapper}>999 €</div>
				<div className={style.redboxdiscountwrapper}>
					<span className={style.redboxdiscount}>20%</span>
				</div>
			</div>
		</div>
		<div className={style.itemwrapper}>
			<div className={style.itemimagewrapper}>
				<img className={style.image} alt='laptop image' src='./laptop3.jpg' />
				<span className={style.promotion}>PROMOCIÓN</span>
			</div>
			<div className={style.itemnamewrapper}>
				Asus TUF Gaming F15 FX506HE-HN042 Intel
			</div>
			<div className={style.itempricewrapper}>649.00 €</div>
			<div className={style.itemdiscountwrapper}>
				<div className={style.discountpricewrapper}>999 €</div>
				<div className={style.redboxdiscountwrapper}>
					<span className={style.redboxdiscount}>35%</span>
				</div>
			</div>
		</div>

		<div className={style.itemwrapper}>
			<div className={style.itemimagewrapper}>
				<img className={style.image} alt='laptop image' src='./laptop4.jpg' />
				<span className={style.promotion}>PROMOCIÓN</span>
			</div>
			<div className={style.itemnamewrapper}>
				Asus Rog Strix G513IH-HN008 AMD Ryzen 7
			</div>
			<div className={style.itempricewrapper}>749.00 €</div>
			<div className={style.itemdiscountwrapper}>
				<div className={style.discountpricewrapper}>1047.39 €</div>
				<div className={style.redboxdiscountwrapper}>
					<span className={style.redboxdiscount}>28%</span>
				</div>
			</div>
		</div>
		<div className={style.itemwrapper}>
			<div className={style.itemimagewrapper}>
				<img className={style.image} alt='laptop image' src='./laptop5.jpg' />
				<span className={style.promotion}>PROMOCIÓN</span>
			</div>
			<div className={style.itemnamewrapper}>
				Asus TUF Gaming F15 FX506HE-HN012 Intel
			</div>
			<div className={style.itempricewrapper}>849.00 €</div>
			<div className={style.itemdiscountwrapper}>
				<div className={style.discountpricewrapper}>1139.01 €</div>
				<div className={style.redboxdiscountwrapper}>
					<span className={style.redboxdiscount}>25%</span>
				</div>
			</div>
		</div>
		<div className={style.itemwrapper}>
			<div className={style.itemimagewrapper}>
				<img className={style.image} alt='laptop image' src='./laptop6.jpg' />
				<span className={style.promotion}>PROMOCIÓN</span>
			</div>
			<div className={style.itemnamewrapper}>
				HP Victus 16-e0067ns AMD Ryzen 7
			</div>
			<div className={style.itempricewrapper}>799.00 €</div>
			<div className={style.itemdiscountwrapper}>
				<div className={style.discountpricewrapper}>999 €</div>
				<div className={style.redboxdiscountwrapper}>
					<span className={style.redboxdiscount}>20%</span>
				</div>
			</div>
		</div>
		<div className={style.itemwrapper}>
			<div className={style.itemimagewrapper}>
				<img className={style.image} alt='laptop image' src='./laptop7.jpg' />
				<span className={style.promotion}>PROMOCIÓN</span>
			</div>
			<div className={style.itemnamewrapper}>
				Asus TUF Gaming F15 FX506HE-HN042 Intel
			</div>
			<div className={style.itempricewrapper}>649.00 €</div>
			<div className={style.itemdiscountwrapper}>
				<div className={style.discountpricewrapper}>999 €</div>
				<div className={style.redboxdiscountwrapper}>
					<span className={style.redboxdiscount}>35%</span>
				</div>
			</div>
		</div>

		<div className={style.itemwrapper}>
			<div className={style.itemimagewrapper}>
				<img className={style.image} alt='laptop image' src='./laptop8.jpg' />
				<span className={style.promotion}>PROMOCIÓN</span>
			</div>
			<div className={style.itemnamewrapper}>
				Asus Rog Strix G513IH-HN008 AMD Ryzen 7
			</div>
			<div className={style.itempricewrapper}>749.00 €</div>
			<div className={style.itemdiscountwrapper}>
				<div className={style.discountpricewrapper}>1047.39 €</div>
				<div className={style.redboxdiscountwrapper}>
					<span className={style.redboxdiscount}>28%</span>
				</div>
			</div>
		</div>
	</div>
);

export default ProductList;
