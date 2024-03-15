import React from "react";
import coffeepic from "./pictures/coffeemain.png";

import MySlider from "./MySlider";
const Homepage = () => {
	return (
		<div className=" w-full  h-full xs:h-3/4 " id="home">
			<div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 items-center justify-items-center w-full h-full    ">
				{" "}
				<div className=" lg:w-full lg:text-9xl grid justify-center item- font-bold font-lilitaOne  xs:my-10 xs:text-4xl xs:w-3/4 xs:ml-20 m-0 p-0">
					{" "}
					<div className="lg:w-full h-full grid  lg:text-8xl md:text-6xl md:w-11/12 sm:text-6xl sm:w-10/12 font-Barriecito font-bold mb-4 sm:mb-0 md:mb-0  xs:text-5xl xs:w-3/4 lg:mx-10 text-shadow-lg xs:mt-32 mt-0	">
						{" "}
						May your coffee kick in before Reality does
						<div className="text-md font-Poppins  font-light lg:text-5xl md:text-4xl sm:text-3xl mb-0 md:mb-72 dropshadow-2xl">
							DON JUANITO COFFEE
						</div>
					</div>{" "}
				</div>
				<div
					className=" w-full h-full sm:h-3/4 mb-40 lg:mb-[200px] lg:mr-20 md:mr-[-150px] 
					sm:mr-[-130px] mr-20 sm:mb-[-150px] xs:mb-[-300px] xs:mr-[20px] md:mb-[130px]"
				>
					<MySlider className="w-full h-full " />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
