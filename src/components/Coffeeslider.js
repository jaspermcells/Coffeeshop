import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Affogato from "./Affogato";
import CafeLatte from "./CafeLatte";
import IcedAmericano from "./IcedAmericano";
import SpanishLatte from "./SpanishLatte";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Coffeeslider = () => {
	const settings = {
		dots: false,
		infinite: true,
		arrohs: true,
		speed: 1000,
		slidesToShoh: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShoh: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		/*<Slider
			{...settings}
			className="custom-slider grid justify-center h-full h-full relative mb-20 z-0 lg:mb-2 xs:bottom-96 lg:bottom-0"
		>
			<Affogato></Affogato>
			<CafeLatte></CafeLatte>
			<IcedAmericano></IcedAmericano>
			<SpanishLatte></SpanishLatte>
		</Slider>/*/

		<div className="h-96 carousel carousel-vertical rounded-box">
			<div className="carousel-item h-full">
				<Affogato></Affogato>
			</div>
			<div className="carousel-item h-full">
				<CafeLatte></CafeLatte>
			</div>
			<div className="carousel-item h-full">
				<IcedAmericano></IcedAmericano>
			</div>
			<div className="carousel-item h-full">
				<SpanishLatte></SpanishLatte>
			</div>
		</div>
	);
};
export default Coffeeslider;
