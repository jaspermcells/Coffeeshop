import React, { useState } from "react";
import { motion } from "framer-motion";

import icedamericano from "./pictures/iced americano.jpg";

const IcedAmericano = () => {
	const icedamericanosm = 5.0;
	const icedamericanomd = 7.0;
	const icedamericanolg = 9.0;
	const [americanoselectedQuantity, setamericanoSelectedQuantity] = useState(0);
	const [displayPrice, setdisplayPrice] = useState(null);
	const [selectedSize, setSelectedSize] = useState(null);
	const [selectedCoffee, setSelectedCoffee] = useState(null);

	const IncrementQuantity = () => {
		setamericanoSelectedQuantity(americanoselectedQuantity + 1);
	};

	const DecrementQuantity = () => {
		setamericanoSelectedQuantity(americanoselectedQuantity - 1);
	};

	const displayQuantity = () => {
		return " dsd " + americanoselectedQuantity;
	};

	const handledisplayPrice = (displayprice) => {
		if (displayprice === "S") {
			setdisplayPrice(icedamericanosm);
		} else if (displayprice === "M") {
			setdisplayPrice(icedamericanomd);
		} else if (displayprice === "L") {
			setdisplayPrice(icedamericanolg);
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
		if (selectedSize === "S" && selectedCoffee === "iced americano") {
			return "Total: $" + icedamericanosm * americanoselectedQuantity;
		} else if (selectedSize === "M" && selectedCoffee === "iced americano") {
			return "Total: $" + icedamericanomd * americanoselectedQuantity;
		} else if (selectedSize === "L" && selectedCoffee === "iced americano") {
			return "Total: $" + icedamericanolg * americanoselectedQuantity;
		} else {
			return "Error code!";
		}
	};

	return (
		<div className="w-full h-full grid grid-cols-1 rounded-lg shadow-2xl drop-shadow-2xl text-white">
			<div id="coffeeimg" className=" ">
				{" "}
				<img
					src={icedamericano}
					style={{ width: "300px", height: "210px" }}
					className="rounded-t-lg object-cover"
				></img>
			</div>
			<div className=" bg-zinc-700 rounded-b-lg h-[182px] pt-5  grid-cols-1 gap-4 text-sm font-Poppins justify-center items-center relative ">
				<div className=" grid grid-cols-1 gap-4 justify-center items-center">
					<div className="text-base text-left ml-2 mb-2 font-semibold tracking-wide">
						Iced Americano
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
export default IcedAmericano;
