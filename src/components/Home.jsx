import React, { useEffect, useState } from "react";
// import NavBar from "./NavBar";
// import TransactionForm from "./TransactionForm";
import NavBar from "./NavBar";
import TransactionForm from "./TransactionForm";
export const url = "http://localhost:3000/transactions";

function Home() {
	const [transactions, setTransactions] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((transactions) => setTransactions(transactions));
	}, []);

	return (
		<main>
			<div>
				<NavBar search={search} setSearch={setSearch} />
			</div>
			<div className=" justify-between flex flex-row">
				<table className="shadow-2xl rounded-lg p-8 m-4 w-full border-collapse">
					<thead className="bg-gray-200">
						<tr className="text-left border-b-2 border-gray-300">
							<th className="p-4">Description</th>
							<th className="p-4">Category</th>
							<th className="p-4">Amount</th>
							<th className="p-4">Date</th>
						</tr>
					</thead>
					<tbody>
						{transactions
							.filter(
								(transaction) =>
									search === "" ||
									transaction.category
										.toLowerCase()
										.includes(search.toLowerCase())
							)
							.map((transaction) => (
								<tr key={transaction.id} className="hover:bg-gray-100">
									<td className="px-4 py-2 border-b border-gray-200">
										{transaction.description}
									</td>
									<td className="px-4 py-2 border-b border-gray-200">
										{transaction.category}
									</td>
									<td className="px-4 py-2 border-b border-gray-200">
										{transaction.amount}
									</td>
									<td className="px-4 py-2 border-b border-gray-200">
										{transaction.date}
									</td>
								</tr>
							))}
					</tbody>
				</table>
				<div className=" shadow-md text bold font-2xl justify-center  rounded-b-md  items-center flex bg-black text-white">
					<TransactionForm
						transaction={transactions}
						setTransactions={setTransactions}
					/>
				</div>
			</div>
		</main>
	);
}

export default Home;
