import React from "react";

const Governing = () => {
	const members = [
		{
			name: "Mr. Kunal Sharma",
			position: "President",
			institution:
				"Department of Computer Science & Engineering, Sikkim Manipal Institute of Technology",
		},
		{
			name: "Mr Shrutarsi Saha",
			position: "President",
			institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS)",
		},
		{
			name: "Mr Saroj Khatiwada",
			position: "Vice President",
			institution:
				"Department of Biotechnology, Sikkim Manipal Institute of Medical Sciences (SMIMS)",
		},
		{
			name: "Mr. Mayank Jaiswal",
			position: "Secretary",
			institution:
				"Department of Mechanical Engineering, Sikkim Manipal Institute of Technology",
		},
		{
			name: "Ms. Ankita Banerjee",
			position: "Executive Board Member",
			institution:
				"Department of Management Studies, Sikkim Manipal Institute of Technology",
		},
		{
			name: "Ms. Ekla Limboo",
			position: "Executive Board Member",
			institution: "Department of Allied Health Professions",
		},
		{
			name: "Mr. Jitam Bharadwaj",
			position: "Executive Board Member",
			institution:
				"Department of Artificial Intelligence (AI) & Data Science (DS), Sikkim Manipal Institute of Technology",
		},
		{
			name: "Mr. Marli Bagra",
			position: "Executive Board Member",
			institution:
				"Department of Civil Engineering, Sikkim Manipal Institute of Technology",
		},
		{
			name: "Mr. Mriganka Dey",
			position: "Executive Board Member",
			institution:
				"Department of Computer Science & Engineering, Sikkim Manipal Institute of Technology",
		},
		{
			name: "Ms. Neha Swami",
			position: "Executive Board Member",
			institution: "Sikkim Manipal College of Physiotherapy (SMCPT)",
		},
		{
			name: "Ms. Pranit Rai",
			position: "Executive Board Member",
			institution: "Department of Humanities and Social Sciences (FHSSLA)",
		},
		{
			name: "Ms. Priya Gurung",
			position: "Executive Board Member",
			institution: "Sikkim Manipal College of Nursing (SMCON)",
		},
		{
			name: "Ms. Samhita Rajguru",
			position: "Executive Board Member",
			institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS)",
		},
		{
			name: "Ms. Tshering Dolma Bhutia",
			position: "Executive Board Member",
			institution: "Master of Hospital Administration (MHA)",
		},
	];
	const exmem = [
		{
			name: "Mr. Jitam Bharadwaj",
			position: "Executive Board Member",
			institution:
				"Department of Artificial Intelligence (AI) & Data Science (DS), Sikkim Manipal Institute of Technology",
		},
		{
			name: "Mr. Marli Bagra",
			position: "Executive Board Member",
			institution:
				"Department of Civil Engineering, Sikkim Manipal Institute of Technology",
		},
		{
			name: "Mr. Mriganka Dey",
			position: "Executive Board Member",
			institution:
				"Department of Computer Science & Engineering, Sikkim Manipal Institute of Technology",
		},
	]

	return (
		<>
			<div className="mx-auto text-3xl font-bold text-orange-800 font-satoshi md:text-5xl">
				Governing Council
			</div>
			<div className="flex flex-col gap-4">
				<div className="mx-auto text-3xl md:mx-0">Directorate of Research</div>
				<div className="grid grid-cols-1 gap-1 md:grid-cols-3">
					<div className="p-4 text-white bg-orange-500 rounded-xl">
						<p>
							<b>DIRECTOR, DIRECTORATE OF RESEARCH</b>
						</p>
						<p>Dr Kalpana Sharma,</p>
						<p>Professor, Dept. of CSE - SMIT</p>
						<p>
							Email Id:&nbsp;director.dor@smu.edu.in / kalpana.s@smit.smu.edu.in
						</p>
						<p>Phone No: +91 9563205842 | +91&nbsp;9641580247</p>
					</div>
					<div className="p-4 text-white bg-orange-500 rounded-xl">
						<p>
							<b>ASSOCIATE DIRECTOR (R&amp;D) SMIT</b>
						</p>
						<p>Dr. Chandrasekhar Bhuiyan,</p>
						<p>
							Professor &amp; HOD, Dept of&nbsp; &nbsp;Civil Engineering, SMIT
						</p>
						<p>Email Id: hod.ce@smit.smu.edu.in</p>
						<p>Phone No. 9836562555</p>
					</div>
					<div className="p-4 text-white bg-orange-500 rounded-xl">
						<p>
							<b>ASSOCIATE DEAN (R&amp;D) SMIMS</b>
						</p>
						<p>
							Dr Luna Adhikari Professor &amp; HOD, Dept of Microbiology,SMIMS
						</p>
						<p>Email Id: luna.a@smims.smu.edu.in</p>
						<p>Phone No: 9434864772</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<div className="mx-auto text-3xl md:mx-0">Chairperson SRF</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="p-4 text-white bg-orange-500 rounded-xl">
						<p>
							<b>Chairperson, SRF SMIT</b>
						</p>
						<p>Dr Joydeep Biswas,</p>
						<p>
							Assistant Professor (Selection Grade), Dept. of Chemistry- SMIT
						</p>
						<p>Email Id:&nbsp;joydeep.biswas@smit.smu.edu.in</p>
						<p>Phone No: +91 9563318330</p>
					</div>
					<div className="p-4 text-white bg-orange-500 rounded-xl">
						<p>
							<b>Chairperson, SRF SMU</b>
						</p>
						<p>Dr. Barkha Devi,</p>
						<p>ASSOCIATE PROFESSOR, Sikkim Manipal College of Nursing</p>
						<p>Email Id: barkha.d@smims.smu.edu.in</p>
						<p>Phone No. +91 7479278673</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="mx-auto text-3xl md:mx-0">Executive Council</div>
				<div className="overflow-x-auto text-white">
					<table className="w-full mb-8 table-auto">
						<thead className="bg-orange-500">
							<tr>
								<th className="px-4 py-2">Name</th>
								<th className="px-4 py-2">Position</th>
								<th className="px-4 py-2">Institution</th>
							</tr>
						</thead>
						<tbody className="text-black">
							{members.map((member) => (
								<tr>
									<td className="px-4 py-2 border border-black">
										{member.name}
									</td>
									<td className="px-4 py-2 border border-black">
										{member.position}
									</td>
									<td className="px-4 py-2 border border-black">
										{member.institution}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="mx-auto text-3xl md:mx-0">Ex-Executive Council</div>
				<div className="overflow-x-auto text-white">
					<table className="w-full mb-8 table-auto">
						<thead className="bg-orange-500">
							<tr>
								<th className="px-4 py-2">Name</th>
								<th className="px-4 py-2">Position</th>
								<th className="px-4 py-2">Institution</th>
							</tr>
						</thead>
						<tbody className="text-black">
							{members.map((exmem) => (
								<tr>
									<td className="px-4 py-2 border border-black">
										{member.name}
									</td>
									<td className="px-4 py-2 border border-black">
										{member.position}
									</td>
									<td className="px-4 py-2 border border-black">
										{member.institution}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Governing;
