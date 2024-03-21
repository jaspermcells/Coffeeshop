import React, { useState } from "react";
import coffeeendpage from "./pictures/coffeeendpage.jpg";
import { ReactComponent as Coffeesvg } from "./pictures/coffeesvg.svg";
import { ReactComponent as Instagram } from "./pictures/reshot-icon-instagram-DM5FP6S9N2.svg";
import { ReactComponent as Twitter } from "./pictures/reshot-icon-twitter-4EAXDHGYM5.svg";
import { ReactComponent as Facebook } from "./pictures/reshot-icon-facebook-square-GCAE9R73J5.svg";
import AnimatedContainer from "./AnimatedContainer";
const Endingpage = () => {
	return (
		<div className=" relative w-full h-auto bg-stone-900 pb-28 font-Poppins text-slate-200">
			<div className="w-full h-full relative grid grid-cols-5 mt-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-3">
				<div className="  font-Poppins font-semibold relative  grid grid-cols-1 col-span-2">
					<div className="grid lg:grid-cols-1 grid-cols-1 relative  justify-center justify-items-center align-items-center items-center   h-3/4">
						<div className="w-[100%] h-[100%] grid grid-cols-2 justify-start items-center text-left">
							<div className="relative w-[100%] h-[100%]">
								<Coffeesvg className="w-[80%] h-[80%] ml-[20%]"></Coffeesvg>
							</div>
							<div className="text-4xl lg:text-4xl xs:text-3xl animate-bounce text-yellow-600 xs:mr-20 mr-0 lg:mr-0">
								{" "}
								Don Juanito
							</div>
						</div>
						<div className=" col-span-2 text-sm font-light w-3/4 md:mr-34 mr-0 lg:mr-0 text-right lg:text-right md:text-center xs:text-center sm:text-center lg:w-3/4 md:w-3/4 ">
							"We serve the best coffee in Davao City. The coffee is brewed by
							high quality coffee beans. "
						</div>
						<div className=" col-span-2  w-1/4 mt-10  grid grid-flow-col grid-cols-3">
							<Instagram className="w-12 h-1/2"></Instagram>
							<Facebook className="w-12 h-1/2"> </Facebook>
							<Twitter className="w-12 h-1/2"></Twitter>
						</div>
					</div>
				</div>

				<div
					className="  font-Poppins font-semibold text-left ml-6 text-lg md:mt-[30%] mt-0 lg:mt-0"
					id="contact"
				>
					Contact Us
					<div className="  grid mt-10 grid-cols-1 items-start justify-start text-left  mb-23 font-light gap-6 text-sm ">
						<div className="">
							Address: Victor's Place, Tigatto, Buhangin, Davao City
						</div>
						<div className="">Phone Number: 09451547044</div>
						<div> Email: jasperbergantinos3@gmail.com</div>
					</div>
				</div>
				<div
					className="font-Poppins font-semibold text-left ml-10  
				 text-lg"
				>
					{" "}
					Viewer Guides
					<div className="  grid mt-10 grid-cols-1 items-start justify-start text-left  mb-23 font-light gap-6 text-sm">
						<div>
							<a href="#" className="hover:underline">
								Home
							</a>
						</div>
						<div>
							<a href="#" className="hover:underline">
								About{" "}
							</a>
						</div>
						<div>
							<a href="#" className="hover:underline">
								{" "}
								Coffee
							</a>
						</div>
						<div>
							<a href="#" className="hover:underline">
								{" "}
								Help & Support
							</a>
						</div>
					</div>
				</div>
				<div
					className=" text-left
				
				 font-Poppins font-semibold text-lg"
				>
					{" "}
					Recent News <AnimatedContainer />
				</div>
			</div>
			<div className="w-full border-t-teal-100 border-t">
				<div className="">
					{" "}
					<div className=" font-Poppins text-sm font-light mt-10">
						All Rights Reserved
					</div>
				</div>
			</div>
		</div>
	);
};

export default Endingpage;
