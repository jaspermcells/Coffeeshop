import Affogato from "./Affogato";
import IcedAmericano from "./IcedAmericano";
import SpanishLatte from "./SpanishLatte";
import CafeLatte from "./CafeLatte";

const CoffeeComponent = () => {
	return (
		<div className=" w-full h-full grid lg:grid-cols-4  grid-cols-4 sm:grid-cols-2 gap-4 relative">
			<Affogato></Affogato>
			<IcedAmericano></IcedAmericano>
			<SpanishLatte></SpanishLatte>
			<CafeLatte></CafeLatte>
		</div>
	);
};
export default CoffeeComponent;
