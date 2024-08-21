import React from "react";
import SearchBar from "./SearchBar";

function NavBar({ search, setSearch }) {
	return (
		<div>
			<header className=" shadow-md p-6 flex items-center justify-between bg-black text-white font-bold ">
				<h1>Bank of Flatiron</h1>
				<SearchBar search={search} setSearch={setSearch} />
			</header>
		</div>
	);
}

export default NavBar;
