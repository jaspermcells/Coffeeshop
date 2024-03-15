// CoffeeComponent.js

import React, { useState, useEffect } from "react";
import cafelatte from "./pictures/cafe latte.jpg";
import icedamericano from "./pictures/iced americano.jpg";
import affogato from "./pictures/affogato.jpg";
import caramelmacchaitos from "./pictures/iced caramel.jpg";
import spanishlatte from "./pictures/spanish latte.jpg";
import matcha from "./pictures/matcha.jpg";
import cappuccino from "./pictures/cappuccino.jpg";
import mochalatte from "./pictures/mocha coffee.jpg";
import IcedAmericano from "./IcedAmericano";
import CafeLatte from "./CafeLatte";
import Affogato from "./Affogato";
import SpanishLatte from "./SpanishLatte";
import Coffeslider from "./Coffeeslider";
import Trylang from "./Trylang";
import Coffeeslider from "./Coffeeslider";
import Coffeecomponents from "./Coffeecomponents";
const CoffeeComponent = ({ onClick }) => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const handleResize = () => {
		setIsSmallScreen(window.innerWidth <= 640);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const icedamericanosm = 5.0;
	const icedamericanomd = 7.0;
	const icedamericanolg = 9.0;

	const cafelattesm = 5.5;
	const cafelattemd = 8.25;
	const cafelattelg = 10.0;
	const affogatosm = 6.25;
	const affogatomd = 7.0;
	const affogatolg = 10.0;
	const caramelmacchaitossm = 6.5;
	const caramelmacchaitosmd = 8.0;
	const caramelmacchaitoslg = 10.0;
	const spanishlattesm = 5.0;
	const spanishlattemd = 7.5;
	const spanishlattelg = 9.0;
	const matchasm = 6.0;
	const matchamd = 7.5;
	const matchalg = 10.0;
	const cappuccinosm = 7.0;
	const cappuccinomd = 8.0;
	const cappuccinolg = 11.0;
	const mochalattesm = 8.0;
	const mochalattemd = 9.0;
	const mochalattelg = 12.0;

	const [americanoselectedQuantity, setamericanoSelectedQuantity] = useState(0);
	/*
	const [cafelatteselectedQuantity, setcafelatteSelectedQuantity] = useState(0);
	const [affogatoselectedQuantity, setaffogatoSelectedQuantity] = useState(0);
	const [caramelselectedQuantity, setcaramelSelectedQuantity] = useState(0);
	const [spanishselectedQuantity, setspanishSelectedQuantity] = useState(0);
	const [matchaselectedQuantity, setmatchaSelectedQuantity] = useState(0);
	const [cappuccinoselectedQuantity, setcappuccinoSelectedQuantity] =
		useState(0);
	const [mochaselectedQuantity, setmochaSelectedQuantity] = useState(0);*/
	const [displayPrice, setdisplayPrice] = useState(null);
	const [selectedSize, setSelectedSize] = useState(null);
	const [selectedCoffee, setSelectedCoffee] = useState(null);

	const IncrementQuantity = (selectedCoffee) => {
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
			return (
				"Selected Size is " +
				selectedSize +
				" Selected Coffee is iced americano"
			);
		} else if (selectedSize === "L" && selectedCoffee === "iced americano") {
			return (
				"Selected Size is " +
				selectedSize +
				" Selected Coffee is iced americano"
			);
		} else {
			return "Error code!";
		}
	};

	return (
		<div className=" p-4 grid justify-center items-center grid-cols-1 justify-items-center align-items-center relative  h-full drop-shadow-2xl">
			<h2 className="text-2xl font-semibold mb-4  relative font-Poppins top-28 lg:top-8 md:top-0 sm:top-0 xs:top-0">
				What is your coffee order?
			</h2>

			<div className=" w-3/4 lg:w-3/4 sm:w-full relative  h-3/4 lg:h-3/4 sm:h-full xs:top-[350px] top-0 lg:top-0 md:top-0 sm:top-0 ">
				{" "}
				{isSmallScreen ? <Coffeeslider /> : <Coffeecomponents />}
			</div>
		</div>
	);
};
export default CoffeeComponent;
