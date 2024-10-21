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

  const exMembers = [
    {
      name: "Dr Kartikeya Ojha",
      position: "President, Founder of SRF SMU",
      tenure: "2021-2022",
      institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS)",
    },
    {
      name: "Dr Shreya Nandan",
      position: "President",
      tenure: "2022-2023",
      institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS)",
    },
    {
      name: "Bishwapriyo Sen",
      position: "President",
      tenure: "2023-2024",
      institution: "Sikkim Manipal Institute of Technology",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-800 font-satoshi text-center mb-8">
        Governing Council
      </h1>

      {/* University Leadership section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">VICE CHANCELLOR</h3>
            <p>Air Vice Marshal (Dr.) Dilip Chandra Agarwal, VSM</p>
            <p>Vice Chancellor, Sikkim Manipal University</p>
            <p>Email Id: vc@smu.edu.in</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">REGISTRAR</h3>
            <p>Prof (Dr.) Karma Sonam Sherpa</p>
            <p>Registrar, Sikkim Manipal University</p>
            <p>Email Id: registrar@smu.edu.in</p>
          </div>
          <div className="hidden md:block md:colspan-1"></div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DEAN SMIMS</h3>
            <p>Dr MURALIDHAR V PAI</p>
            <p>MBBS, DGO, MD (OBG), FICOG, FICMCH</p>
            <p>Dean, Sikkim Manipal Institute of Medical Sciences</p>
            <p>Sikkim Manipal University</p>
            <p>Email: dean@smims.smu.edu.in</p>
            <p>Phone: +91 3592-270535</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DIRECTOR SMIT</h3>
            <p>Prof (Dr.) GL Sharma</p>
            <p>Director, Sikkim Manipal Institute of Technology</p>
            <p>Email Id: director.smit@smu.edu.in</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DIRECTOR R&D</h3>
            <p>Dr Kalpana Sharma,</p>
            <p>Director, Directorate of Research, Sikkim Manipal University</p>
            <p>Email Id: director.dor@smu.edu.in</p>
            <p>Phone No: +91 9563205842 | +91 9641580247</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">
              ASSOCIATE DIRECTOR (Research) SMIT
            </h3>
            <p>Dr. Chandrasekhar Bhuiyan,</p>
            <p>Professor &amp; HOD, Dept of Civil Engineering, SMIT</p>
            <p>Email Id: hod.ce@smit.smu.edu.in</p>
            <p>Phone No. 9836562555</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">ASSOCIATE DEAN (Research) SMIMS</h3>
            <p>Dr Luna Adhikari</p>
            <p>Professor &amp; HOD, Dept of Microbiology, SMIMS</p>
            <p>Email Id: luna.a@smims.smu.edu.in</p>
            <p>Phone No: 9434864772</p>
          </div>
        </div>
      </section>

      {/* Chairperson SRF section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Chairperson SRF</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">Chairperson, SRF SMIT</h3>
            <p>Dr Joydeep Biswas,</p>
            <p>
              Assistant Professor (Selection Grade), Dept. of Chemistry- SMIT
            </p>
            <p>Email Id: joydeep.biswas@smit.smu.edu.in</p>
            <p>Phone No: +91 9563318330</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">Chairperson, SRF SMU</h3>
            <p>Dr. Barkha Devi,</p>
            <p>ASSOCIATE PROFESSOR, Sikkim Manipal College of Nursing</p>
            <p>Email Id: barkha.d@smims.smu.edu.in</p>
            <p>Phone No. +91 7479278673</p>
          </div>
        </div>
      </section>

      {/* Executive Council section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Executive Council</h2>
        <div className="overflow-x-auto">
          <table className="w-full mb-8 table-auto">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Institution</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {members.map((member, index) => (
                <tr key={index}>
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
      </section>

      {/* Ex-Executive Council section */}
      <section>
        <h2 className="text-3xl mb-4">Former Executive Council</h2>
        <div className="overflow-x-auto">
          <table className="w-full mb-8 table-auto">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Tenure</th>
                <th className="px-4 py-2">Institution</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {exMembers.map((member, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-black">
                    {member.name}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {member.position}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {member.tenure}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {member.institution}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Governing;
