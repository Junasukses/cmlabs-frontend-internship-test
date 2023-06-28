import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function CategoryDetail() {
	let { categoryName } = useParams();
	const { handleState } = useContext(GlobalContext);
	const { data, setData } = handleState;
	useEffect(() => {
		if (categoryName !== undefined) {
			axios
				.get(
					`http://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
				)
				.then((res) => {
					setData([...res.data.meals]);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	return (
		<>
			<div className="py-[70px] px-[10px] lg:px-[180px] font-['Poppins']">
				<h1 className="text-[30px] text-slate-700">{categoryName} Meals</h1>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 py-[0px] lg:py-[70px] px-[10px] lg:px-[180px]">
				{data !== null &&
					data.map((res) => {
						return (
							<button
								className={`cards inline-block bg-white rounded-2xl overflow-hidden text-center h-[150px] bg-no-repeat bg-center bg-cover flex items-center justify-center font-['Poppins'] text-white font-semibold relative filter brightness-75 hover:brightness-50 text-white
                    `}
								style={{
									backgroundImage: `url(${res.strMealThumb})`,
								}}
								value={res.idMeal}
							>
								{res.strMeal}
							</button>
						);
					})}
			</div>
		</>
	);
}

export default CategoryDetail;
