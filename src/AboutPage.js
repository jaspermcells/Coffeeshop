import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Highquality } from "./components/pictures/highquality.svg";
import { ReactComponent as Beancoffee } from "./components/pictures/beancoffee.svg";
import { ReactComponent as Coffeemug } from "./components/pictures/coffeemug.svg";
import { ReactComponent as Coffeemaker } from "./components/pictures/coffeemaker.svg";
import coffeeplace from "./components/pictures/coffeeplace.jpg";
import coffeeplace2 from "./components/pictures/coffeeplace2.jpg";

import { motion, useAnimation } from "framer-motion";

const AboutPage = () => {
	// Create a ref for the container element
	const containerRef = useRef(null);

	useEffect(() => {
		// Define the options for the Intersection Observer
		const options = {
			root: null, // Use the viewport as the root
			rootMargin: "0px", // No margin
			threshold: 0.5, // When 50% of the element is visible
		};

		// Create a new Intersection Observer
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				// If the container is intersecting with the viewport
				if (entry.isIntersecting) {
					// Trigger your animation here
					// For example, start the animation using framer-motion
					controls.start("visible");

					// Stop observing once the animation is triggered (optional)
					observer.unobserve(entry.target);
				}
			});
		}, options);

		// Start observing the container
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		// Clean up the observer when the component unmounts
		return () => {
			observer.disconnect();
		};
	}, []);

	// Define animation variants
	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	// Create animation controls
	const controls = useAnimation();

	const containerStyle = {
		background: 'url("src/components/pictures/coffeebg.jpg")',
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		// Add any other styles you need
		// For example: width, height, padding, etc.
	};
	return (
		<div
			className="w-full h-auto bg-yellow-800 grid grid-cols-1  justify-items-stretch justify-stretch gap-0 md:pt-72 pt-0 lg:pt-0"
			id="about"
		>
			<div className=" grid grid-flow-col w-full h-1/4 p-4 md:mt-[350px] mt-0 ">
				<div className=" grid grid-flow-col lg:grid-cols-4 grid-cols-4 md:grid-cols-2 grid-rows-1 lg:grid-rows-1 md:grid-rows-2 lg:h-full md:h-[100%] gap-0 lg:gap-0 md:gap-3 sm:grid-cols-1 sm:grid-rows-4 sm:gap-4 sm:w-[50%] w-full lg:w-full md:w-full sm:justify-center sm:items-center sm:ml-[25%] ml-0 lg:ml-0 md:ml-0 md:mt-full  sm:mt-[100%] md:mt-0 justify-center items-center justify-items-center xs:grid-cols-1 xs:grid-rows-4 xs:w-3/4 xs:justify-center xs:items-center xs:ml-[12%] xs:mt-[70%] xs:gap-4 lg:mt-[-8%]">
					<motion.div
						ref={containerRef}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.3, duration: 0.5 },
						}}
						initial={{ opacity: 0, y: 50 }}
						viewport={{ once: true, amount: 0.5 }}
						className="  bg-yellow-600 font-extrabold grid justify-center items-start justify-items-center grid-flow-row grid-cols-1 p-10 shadow-2xl drop-shadow-2xl"
					>
						<Coffeemug className="w-20 h-10 " />
						<div>AWESOME AROMA</div>
						<div className="text-md font-medium ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
							ante risus. Integer pharetra eu arcu vel rhoncus. Donec at tempor
							sem, nec cursus nisl.
						</div>
					</motion.div>
					<motion.div
						ref={containerRef}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.3, duration: 0.5 },
						}}
						initial={{ opacity: 0, y: 50 }}
						viewport={{ once: true, amount: 0.5 }}
						className="  bg-yellow-600 font-extrabold grid justify-center items-start justify-items-center grid-flow-row grid-cols-1 p-10 shadow-2xl drop-shadow-2xl"
					>
						<Highquality className="w-20 h-10 " />
						<div>HIGH QUALITY</div>
						<div className="text-md font-medium ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
							ante risus. Integer pharetra eu arcu vel rhoncus. Donec at tempor
							sem, nec cursus nisl.
						</div>
					</motion.div>
					<motion.div
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.3, duration: 0.5 },
						}}
						initial={{ opacity: 0, y: 50 }}
						viewport={{ once: true, amount: 0.5 }}
						className="  bg-yellow-600 font-extrabold grid justify-center items-start justify-items-center grid-flow-row grid-cols-1 p-10 shadow-2xl drop-shadow-2xl"
					>
						<Beancoffee className="w-20 h-10 " />
						<div>PURE GRADES</div>
						<div className="text-md font-medium ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
							ante risus. Integer pharetra eu arcu vel rhoncus. Donec at tempor
							sem, nec cursus nisl.
						</div>
					</motion.div>
					<motion.div
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.3, duration: 0.5 },
						}}
						initial={{ opacity: 0, y: 50 }}
						viewport={{ once: true, amount: 0.5 }}
						className="  bg-yellow-600 font-extrabold grid justify-center items-start justify-items-center grid-flow-row grid-cols-1 p-10 shadow-2xl drop-shadow-2xl"
					>
						<Coffeemaker className="w-20 h-10 " />
						<div>PROPER ROASTING</div>
						<div className="text-md font-medium ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
							ante risus. Integer pharetra eu arcu vel rhoncus. Donec at tempor
							sem, nec cursus nisl.
						</div>
					</motion.div>
				</div>
			</div>
			<div className=" h-3/4 grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ml-0 xs:ml-5 grid-flow-row  ">
				<div className=" w-3/4 h-3/4 ">
					<motion.div
						className="w-full h-full "
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.3, duration: 0.5 },
						}}
						initial={{ opacity: 0, y: 50 }}
						viewport={{ once: true, amount: 0.5 }}
					>
						{" "}
						<img
							src={coffeeplace}
							className=" w-full h-full m-10 shadow-lg drop-shadow-xl rounded-md"
						></img>
					</motion.div>{" "}
				</div>
				<div className=" w-full h-full text-7xl grid grid-cols-1 grid-flow-row gap-2 justify-center items-center pl-10    m-0">
					<div className=" font-Poppins font-semibold w-3/4 justify-start items-start align-items-start text-left text-black  mb-10">
						{" "}
						Best Coffee House in the Town
						<div className=" relative mb-54 grid items-start gap-3 text-light">
							<div className=" text-base  text-black font-medium tracking-wide text-left w-full 1/4 pt-2 mt-6">
								{" "}
								Nunc fermentum aliquam justo sed congue. Mauris consequat eros
								eget rhoncus rutrum. Nulla hendrerit ullamcorper lectus, quis
								cursus ante ullamcorper a. Curabitur risus sem, congue in turpis
								eu, lobortis semper tortor.s
							</div>
							<div className=" text-base  text-black font-medium tracking-wide text-left w-full h-1/4">
								{" "}
								Nunc fermentum aliquam justo sed congue. Mauris consequat eros
								eget rhoncus rutrum. Nulla hendrerit ullamcorper lectus, quis
								cursus ante ullamcorper a.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
