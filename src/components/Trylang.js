import React, { useState, useEffect } from "react";

const ComponentOne = () => {
	return <div className="bg-blue-200 p-4">Component Onedsadasds</div>;
};

const ComponentTwo = () => {
	return <div className="bg-green-200 p-4">Component Twodsadsadsadsadasd</div>;
};

const Trylang = () => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Trylang;
