import { FaLinkedin, FaInstagram } from "react-icons/fa6";
const Developer = ({ developer }) => {
	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden border border-orange-500 p-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<img
					src={developer.image}
					alt={developer.name}
					className="h-auto w-full object-cover rounded-lg col-span-1"
				/>
				<div className="col-span-1 md:col-span-2">
					<h3 className="text-2xl font-bold mb-2 text-orange-800">
						{developer.name}
					</h3>
					<p>
						<strong>Position:</strong> {developer.position}
					</p>
					<p>
						<strong>Registration No:</strong> {developer.registrationNo}
					</p>
					<p>
						<strong>Institution:</strong> {developer.institution}
					</p>
					<p>
						<strong>Institute email:</strong> {developer.email}
					</p>
					<p className="mt-4 italic text-gray-600">
						&quot;{developer.message}&quot;
					</p>
					<div className="mt-6 flex space-x-4">
						<a
							href={developer.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-500  px-4 py-2 rounded hover:text-orange-800 transition duration-300 text-3xl hover:cursor-pointer">
							<FaLinkedin />
						</a>
						<a
							href={developer.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-500  px-4 py-2 rounded hover:text-orange-800 transition duration-300 text-3xl hover:cursor-pointer">
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Developer;
