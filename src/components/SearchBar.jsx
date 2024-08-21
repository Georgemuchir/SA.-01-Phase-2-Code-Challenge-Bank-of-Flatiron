import React from "react";

function SearchBar({ search, setSearch }) {
	return (
		<div>
			<input
				name="search"
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="outline-orange-500 p-2 border border-gray-300 text-black rounded-lg focus:outline-none"
				placeholder="Search"
			/>
		</div>
	);
}

export default SearchBar;
