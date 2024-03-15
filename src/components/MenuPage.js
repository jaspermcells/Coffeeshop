import React, { useState } from "react";
import Menu from "./Menu";
import coffeeshop from "./pictures/coffeeshop.jpg";
const MenuPage = () => {
	return (
		<div className=" w-3/4 h-auto bg-yellow-600 drop-shadow-2xl text-5xl z-50 grid shadow-2xl shadow-slate-950 p-10 ml-42 rounded-md   relative justify-center items-center justify-items-center pb-32   ">
			<Menu />
		</div>
	);
};

export default MenuPage;
