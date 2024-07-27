import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFoundPage from "./pages/layout/NotFoundPage";
import Home from "./pages/Home";
import User from "./pages/User";
function Router() {
	return (
		<>
			<hr/>
			<Routes>
				<Route path="/" element={ <Home/> }/>
				<Route path="/home" element={ <Home/> }/>
				<Route path="/user" element={ <User/> }/>
				<Route path="*" element={ <NotFoundPage/> }/>
			</Routes>
		</>
	)
}
export default Router;