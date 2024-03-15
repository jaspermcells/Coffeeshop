import React, { useState, useEffect } from "react";

const ComponentOne = () => {
	return <div className="bg-blue-200 p-4">Component Onedsadasds</div>;
};

const ComponentTwo = () => {
	return <div className="bg-green-200 p-4">Component Twodsadsadsadsadasd</div>;
};

const Trylang = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const handleResize = () => {
		setIsSmallScreen(window.innerWidth <= 600);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return <div>{isSmallScreen ? <ComponentTwo /> : <ComponentOne />}</div>;
};

export default Trylang;
