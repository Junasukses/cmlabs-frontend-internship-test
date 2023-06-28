import React, { useContext } from "react";
import gambarsatu from "../1.png";
import gambardua from "../2.png";
import gambartiga from "../3.png";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

function Category() {
	const { handleState, handleFunction } = useContext(GlobalContext);
	const { data, setData } = handleState;
	const { HandleNavigateEdit } = handleFunction;
	axios
		.get("https://www.themealdb.com/api/json/v1/1/categories.php")
		.then((res) => {
			setData([...res.data.categories]);
		})
		.catch((err) => {
			console.log(err);
		});
	return (
		<>
			<div className="text-center bg-gray-200 font-['Poppins'] py-[70px] px-[10px] lg:px-[120px] space-y-[20px]">
				{/* <div className="grid grid-cols-3 gap-4 place-items-center"> */}
				<div className="flex flex-row justify-center h-[20px] space-x-[40px]">
					<img src={gambarsatu} alt="gambarsatu"></img>
					<img src={gambardua} alt="gambardua"></img>
					<img src={gambartiga} alt="gambartiga"></img>
				</div>

				<h1 className="font-semibold text-cyan-700 text-[12px]">
					Hexagon FRONT-END TEST
				</h1>
				<h1 className="font-[700] text-cyan-900 text-[40px] lg:text-[50px] tracking-wide">
					See All Delicious Foods
				</h1>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 py-[20px] lg:py-[70px] px-[10px] lg:px-[180px]">
				{data !== null &&
					data.map((res) => {
						return (
							<button
								className={`cards inline-block bg-white rounded-2xl overflow-hidden text-center h-[150px] bg-no-repeat bg-center bg-cover flex items-center justify-center font-['Poppins'] text-white font-semibold relative filter brightness-75 hover:brightness-50 text-white
							`}
								style={{
									backgroundImage: `url(${res.strCategoryThumb})`,
								}}
								value={res.strCategory}
								onClick={HandleNavigateEdit}
							>
								{res.strCategory}
							</button>
						);
					})}
			</div>
		</>
	);
}

export default Category;
