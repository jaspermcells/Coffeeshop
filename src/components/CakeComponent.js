// CakeComponent.js

import React from "react";

const CakeComponent = ({ onClick }) => (
	<div className="bg-green-200 p-4">
		<h2 className="text-2xl font-bold mb-4">Component Two</h2>
		<p>This is the second component.</p>
		<button
			className="bg-green-500 text-white py-2 px-4 rounded"
			onClick={onClick}
		>
			Switch to Component One
		</button>
	</div>
);

export default CakeComponent;
