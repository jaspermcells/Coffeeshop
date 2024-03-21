import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedContainer = () => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ rootMargin: "0px", threshold: 0.5 } // Adjust threshold as needed
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, []);

	return (
		<div ref={containerRef} className="container">
			<motion.div
				initial="hidden"
				animate={isVisible ? "visible" : "hidden"}
				variants={{
					hidden: { opacity: 0, y: 50 },
					visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
				}}
				className="w-64 h-64 bg-blue-500"
			>
				{/* Content inside the animated container */}
			</motion.div>
		</div>
	);
};

export default AnimatedContainer;
