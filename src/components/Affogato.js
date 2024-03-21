import React, { useState } from "react";

import affogato from "./pictures/affogato.jpg";
import { motion } from "framer-motion";

const Affogato = () => {
	const affogatosm = 6.25;
	const affogatomd = 7.0;
	const affogatolg = 10.0;
	const [affogatoselectedQuantity, setaffogatoSelectedQuantity] = useState(0);
	const [displayPrice, setdisplayPrice] = useState(null);
	const [selectedSize, setSelectedSize] = useState(null);
	const [selectedCoffee, setSelectedCoffee] = useState(null);

	const IncrementQuantity = () => {
		setaffogatoSelectedQuantity(affogatoselectedQuantity + 1);
	};

	const DecrementQuantity = () => {
		setaffogatoSelectedQuantity(affogatoselectedQuantity - 1);
	};

	const displayQuantity = () => {
		return " dsd " + affogatoselectedQuantity;
	};

	const handledisplayPrice = (displayprice) => {
		if (displayprice === "S") {
			setdisplayPrice(affogatosm);
		} else if (displayprice === "M") {
			setdisplayPrice(affogatomd);
		} else if (displayprice === "L") {
			setdisplayPrice(affogatolg);
		} else {
			setdisplayPrice(0);
		}
	};
	const handleCoffeeOrder = (order) => {
		setSelectedCoffee(order);
	};
	const handleCoffeeSize = (size) => {
		setSelectedSize(size);
	};
	const handleClick = (coffeesize, coffeeorder, displayprice) => {
		handleCoffeeSize(coffeesize);
		handleCoffeeOrder(coffeeorder);
		handledisplayPrice(displayprice);
	};
	const getPrice = () => {
		if (selectedSize === "S" && selectedCoffee === "iced caffelatte") {
			return "Total: $" + affogatosm * affogatoselectedQuantity;
		} else if (selectedSize === "M" && selectedCoffee === "iced caffelatte") {
			return "Total: $" + affogatomd * affogatoselectedQuantity;
		} else if (selectedSize === "L" && selectedCoffee === "iced caffelatte") {
			return "Total: $" + affogatolg * affogatoselectedQuantity;
		} else {
			return "Error code!";
		}
	};

	return (
		<div className="w-full h-full grid grid-cols-1 rounded-lg shadow-2xl drop-shadow-2xl text-white ">
			<div id="coffeeimg" className=" ">
				{" "}
				<img
					src={affogato}
					style={{ width: "300px", height: "210px" }}
					className="rounded-t-lg object-cover"
				></img>
			</div>
			<div className=" bg-zinc-700 rounded-b-lg h-[182px] pt-5  grid-cols-1 gap-4 text-sm font-Poppins justify-center items-center relative ">
				<div className=" grid grid-cols-1 gap-4 justify-center items-center">
					<div className="text-base text-left ml-2 mb-2 font-semibold tracking-wide">
						Affogato
					</div>
					<div className="grid grid-flow-col gap-0 relative grid-cols-1">
						{" "}
						<div className="grid grid-cols-3 justify-center items-center relative ml-4">
							<button
								onClick={() => handleClick("S", "iced caffelatte", "S")}
								className="bg-amber-700 w-1/2 drop-shadow-2xl shadow-2xl  hover:shadow-2xl hover:scale-125 delay-100 duration-200 hover:bg-blue-100 text-black  rounded-sm"
							>
								S
							</button>
							<button
								onClick={() => handleClick("M", "iced caffelatte", "M")}
								className="bg-amber-700 w-1/2   drop-shadow-2xl shadow-2xl hover:shadow-2xl hover:scale-125 delay-100 duration-200 hover:bg-blue-100 text-black  rounded-sm"
							>
								M
							</button>
							<button
								onClick={() => handleClick("L", "iced caffelatte", "L")}
								className="bg-amber-700 w-1/2   drop-shadow-2xl shadow-2xl hover:shadow-2xl hover:scale-125 delay-100 duration-200 hover:bg-blue-100 text-black rounded-sm"
							>
								L
							</button>
						</div>
					</div>
					<div id="displayprice"> ${displayPrice}</div>
					<motion.button
						whileTap={{ scale: 0.9 }}
						whileHover={{
							scale: 1.1,
							backgroundColor: "red",
							color: "white",
						}}
						transition={{ bounceDamping: 10, bounceStiffness: 400 }}
						className=" bg-stone-100 w-1/2 grid ml-10 text-red-500 rounded-sm text-[12px] font-semibold p-1 transition-transform transform hover:scale-110  drop-shadow-2xl shadow-2xl shadow-black"
					>
						{" "}
						Order Now
					</motion.button>
				</div>
			</div>
		</div>
	);
};
export default Affogato;
