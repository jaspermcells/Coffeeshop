import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import MySlider from "./components/MySlider";
import Menu from "./components/Menu";
import MenuPage from "./components/MenuPage";
import AboutPage from "./AboutPage";
import Endingpage from "./components/Endingpage";
import Trylang from "./components/Trylang";
import Coffeeslider from "./components/Coffeeslider";
function App() {
	return (
		<div className="App">
			<React.Fragment>
				<div className=" grid grid-cols-1 z-10 relative bg-transparent w-screen h-screen ">
					<Navbar className=" z-50  absolute  " />
					<Homepage />

					<div
						className="w-full h-screen bg-white z-0 grid  grid-cols-1 justify-center items-center bg-custom-background md:bottom-72 bottom-0 "
						style={{ filter: "brightness(0.8)" }}
					>
						<div className=" text-6xl font-Barriecito text-white grayscale-0 mt-10 mb-10">
							MENU
						</div>
						<div className=" grid justify-items-center justify-center items-center relative grayscale-0  ">
							<MenuPage />
						</div>
					</div>
					<AboutPage />
					<Endingpage />
				</div>
			</React.Fragment>
		</div>
	);
}

export default App;
