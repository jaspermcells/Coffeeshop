import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coffee1 from "./pictures/coffee1-removebg-preview.png";
import coffee2 from "./pictures/coffee2-removebg-preview.png";
import coffee3 from "./pictures/coffeemain.png";
const MySlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider
			{...settings}
			className="grid justify-center h-full relative mb-20 z-0 lg:mb-2 xs:bottom-96 lg:bottom-0 md:bottom-1/2 sm:bottom-72 md:h-1/2   "
		>
			<div className="w-3/4 lg:w-3/4 h-96  lg:h-96 mt-2  z-1">
				<img
					src={coffee1}
					className=" ml-48 lg:ml-48 xs:ml-28 w-1/12 lg:w-1/12 h-1/12 lg:h-1/12 absolute bottom-1  object-cover"
					alt="coffee "
				/>
			</div>
			<div className=" w-3/4 h-96 lg:w-3/4 lg:h-96 mt-72 z-1">
				<img
					src={coffee2}
					className=" ml-48 w-1/12 h-1/12  xs:ml-28  lg:w-1/12 lg:h-1/12 absolute  bottom-0.5  object-cover"
					alt="coffee "
				/>
			</div>
			<div className=" w-3/4 h-96 lg:w-3/4 lg:h-96  mt-48 z-1">
				<img
					src={coffee3}
					className=" ml-48 w-1/12 h-1/12   xs:ml-28  lg:w-1/12 lg:h-1/12 absolute  bottom-0.5  object-cover mb-28"
					alt="coffee "
				/>
			</div>
			{/* Add more slides as needed */}
		</Slider>
	);
};
export default MySlider;
