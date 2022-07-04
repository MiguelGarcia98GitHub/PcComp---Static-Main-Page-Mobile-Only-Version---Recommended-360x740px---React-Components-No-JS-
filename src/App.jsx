import Awards from './components/Awards';
import BenefitsList from './components/BenefitsList';
import BlogList from './components/BlogList';
import CategoryList from './components/CategoryList';
import DownloadOurApp from './components/DownloadOurApp';
import FooterNavbar from './components/FooterNavbar';
import Location from './components/Location';
import MonitorsRaffle from './components/MonitorsRaffle';
import PaymentMethods from './components/PaymentMethods';
import PcCompIn from './components/PcCompIn';
import PcDaysCounter from './components/PcDaysCounter';
import ProductList from './components/ProductList';
import SubMenu from './components/SubMenu';
import TitleFour from './components/TitleFour';
import TitleOne from './components/TitleOne';
import TitleThree from './components/TitleThree';
import TitleTwo from './components/TitleTwo';
import TopNavbar from './components/TopNavbar';

const App = () => {
	return (
		<div>
			<PcDaysCounter />
			<TopNavbar />
			<TitleOne />
			<SubMenu />
			<TitleTwo />
			<CategoryList />
			<BenefitsList />
			<TitleThree />
			<ProductList />
			<TitleFour />
			<BlogList />
			<MonitorsRaffle />
			<FooterNavbar />
			<PcCompIn />
			<Awards />
			<PaymentMethods />
			<DownloadOurApp />
			<Location />
		</div>
	);
};

export default App;
