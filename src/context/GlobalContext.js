// import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
	const navigate = useNavigate();
	const [data, setData] = useState(null);
	const [categoryName, setCategoryName] = useState(null);

	const HandleNavigateEdit = (event) => {
		let getCategoryName = event.target.value;
		// console.log(getCategoryName);
		setCategoryName(getCategoryName);
		navigate(`/category/${categoryName}`);
	};
	let handleState = { data, setData, categoryName, setCategoryName };
	let handleFunction = { HandleNavigateEdit };
	return (
		<GlobalContext.Provider value={{ handleState, handleFunction }}>
			{props.children}
		</GlobalContext.Provider>
	);
};
