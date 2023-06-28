// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/category";
import NavbarComponent from "./component/navbar";
import { GlobalProvider } from "./context/GlobalContext";
import CategoryDetail from "./pages/category-details";

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalProvider>
					<NavbarComponent />
					<Routes>
						<Route path="/" element={<Category />} />
						<Route path="/category/:categoryName" element={<CategoryDetail />} />
					</Routes>
				</GlobalProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
