import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
const Developer = ({ developer, batch: batchProp }) => {
	try {
		console.debug('Developer props:', developer);
		console.debug('Developer keys:', Object.keys(developer || {}));
		console.debug('batch prop:', batchProp);
	} catch (e) {}

	const finalBatch = batchProp ?? developer?.batch ?? null;

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
						<strong>Batch:</strong>{' '}
						<span
							className="text-black font-normal"
							title={finalBatch ?? 'undefined'}
						>
							{finalBatch ?? 'N/A'}
						</span>
					</p>
					<p>
						<strong>Institution:</strong> {developer.institution}
					</p>
					<p>
						<strong>Email:</strong> {developer.email}
					</p>
					<p className="mt-4 italic text-gray-600 text-justify">
						&quot;{developer.message}&quot;
					</p>
					{finalBatch === null && (
						<div className="mt-4 p-2 bg-gray-100 text-sm text-red-600">
							<div className="font-semibold">Developer prop debug (batch missing)</div>
							<div className="text-xs text-gray-700">keys: {Object.keys(developer || {}).join(', ')}</div>
							<div className="text-xs text-gray-700">batch prop: {String(batchProp)}</div>
							<pre className="mt-2 overflow-auto">{JSON.stringify(developer, null, 2)}</pre>
						</div>
					)}
					<div className="mt-6 flex space-x-4">
						{developer.linkedin && (
							<a
								href={developer.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-500  px-4 py-2 rounded hover:text-orange-800 transition duration-300 text-3xl hover:cursor-pointer">
								<FaLinkedin />
							</a>
						)}

						{developer.instagram && (
							<a
								href={developer.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-500  px-4 py-2 rounded hover:text-orange-800 transition duration-300 text-3xl hover:cursor-pointer">
								<FaInstagram />
							</a>
						)}

						{developer.github && (
							<a
								href={developer.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-500  px-4 py-2 rounded hover:text-orange-800 transition duration-300 text-3xl hover:cursor-pointer">
								<FaGithub />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Developer;
