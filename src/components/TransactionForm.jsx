import React, { useState } from "react";
import { url } from "./Home";

function TransactionForm({ transaction, setTransaction }) {
	const [formData, setFormData] = useState({
		description: "",
		category: "",
		amount: 0,
		date: "",
	});
	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		console.log("hello");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => setTransaction([data, ...transaction]));
		setFormData("");
	};

	return (
		<div>
			<div className="flex justify-center items-center shadow-2xl rounded-md text-center p-4 m-4 text-black ">
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className=" flex justify-center text-white "
							htmlFor="description"
						>
							Description:
						</label>
						<input
							type="text"
							name="description"
							value={formData.description}
							onChange={handleChange}
							className="p-2 border-2 rounded-lg shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className=" flex justify-center text-white "
							htmlFor="category"
						>
							Category:
						</label>
						<input
							type="text"
							name="category"
							onChange={handleChange}
							className="p-2 border-2 rounded-lg shadow-sm"
							required
						/>
					</div>
					<div className="mb-4 ">
						<label className="flex justify-center text-white" htmlFor="amount">
							Amount:
						</label>
						<input
							type="number"
							name="amount"
							onChange={handleChange}
							className="p-2 border-2 rounded-lg shadow-sm"
							required
						/>
					</div>
					<div className="mb-4 flex flex-col ">
						<label htmlFor="date" className="text-white">
							Date:
						</label>
						<input
							type="date"
							className=" p-2 border-2 rounded-lg shadow-sm"
							name="date"
							onChange={handleChange}
							required
						/>
					</div>
					<button
						className="bg-blue-500  hover:bg-slate-400 text-white font-bold px-5 py-2 rounded m-2"
						type="submit"
					>
						Add{" "}
					</button>
				</form>
			</div>
		</div>
	);
}

export default TransactionForm;
