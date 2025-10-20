import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const mailtoLink = `mailto:srf@smit.smu.edu.in?subject=${encodeURIComponent(
			formData.subject
		)}&body=${encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
		)}`;
		window.location.href = mailtoLink;
	};
	return (
		<>
			<div className="mx-auto text-3xl font-bold text-orange-800 font-poppins md:text-5xl">
				Contact Us
			</div>
			<div className="grid grid-cols-1 gap-4 mx-auto mb-8 text-center">
				<p className="text-sm font-semibold text-gray-700 md:text-base">
					We are happy to answer any questions you have to provide you with an
					estimate,
					<br />
					Just send us a message in the form below with any question you may
					have
				</p>
				<form
					onSubmit={handleSubmit}
					className="w-full p-8 bg-white rounded-lg shadow-lg">
					<h2 className="mb-6 text-2xl font-bold">Contact Us</h2>
					<div className="mb-4">
						<label
							className="block mb-2 text-sm font-bold text-gray-700"
							htmlFor="name">
							YOUR NAME (required)
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block mb-2 text-sm font-bold text-gray-700"
							htmlFor="email">
							YOUR E-MAIL (required)
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block mb-2 text-sm font-bold text-gray-700"
							htmlFor="subject">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block mb-2 text-sm font-bold text-gray-700"
							htmlFor="message">
							YOUR MESSAGE
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							className="w-full h-32 px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"></textarea>
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline">
							SEND
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Contact;
