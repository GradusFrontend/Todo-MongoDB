'use client'
import axios from 'axios';
import React from 'react'

export default function Home() {

	function postData() {
		const user = {
			name: "Alex",
			email: "alex@gmail.com"
		}	

		axios.post('http://localhost:3000/api/todos', {
			name: "Alex",
			email: "alex@gmail.com"
		})
			.then(res => console.log(res))

	// 	fetch('http://localhost:3000/api/users', {
	// 		method: "POST",
	// 		body: JSON.stringify(user)
	// 	}).then(res => res.json())
	// .then(res => console.log(res))
}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<button
				onClick={postData}
			>create</button>
		</main>
	);
}