import React, { useState } from "react";
import CoffeeComponent from "./CoffeeComponent";
import CakeComponent from "./CakeComponent";

const Menu = () => {
	const [showCoffeeComponent, setShowCoffeeComponent] = useState(true);

	const handleSwitchToCoffeeComponent = () => {
		setShowCoffeeComponent(true);
	};

	const handleSwitchToCakeComponent = () => {
		setShowCoffeeComponent(false);
	};

	return (
		<div
			className="blur-none relative grid grid-cols-1 justify-center items-center "
			id="menu"
		>
			<div className="mb-4 relative  ">
				<button
					className={`mr-2  font-Poppins text-sm p-4 rounded-md bg-amber-800 shadow-xl shadow-black ${
						showCoffeeComponent
							? "bg-amber-900 hover:bg-amber-600 hover:text-black text-white"
							: "bg-amber-900 hover:bg-amber-600 hover:text-black text-white"
					}`}
					onClick={handleSwitchToCoffeeComponent}
				>
					Coffee
				</button>
				<button
					className={`mr-2  font-Poppins text-sm p-4 rounded-md bg-amber-800 shadow-xl shadow-black ${
						!showCoffeeComponent
							? "bg-yellow-700 text-white hover:text-black hover:bg-yellow-500"
							: "bg-yellow-700 text-white hover:text-black hover:bg-yellow-500"
					}`}
					onClick={handleSwitchToCakeComponent}
				>
					Cake
				</button>
			</div>
			{showCoffeeComponent ? <CoffeeComponent /> : <CakeComponent />}
		</div>
	);
};

export default Menu;
