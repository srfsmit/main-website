import React from "react";

const Governing = () => {
  const members = [
    {
      name: "Ms. Torsha G.",
      position: "President",
      institution: "Department of Computer Science & Engineering, Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Mr. Pranit Rai",
      position: "President",
      institution: "Department of Humanities and Social Sciences (FHSSLA), Sikkim Manipal University (SMU)",
    },
      {
      name: "Mr. Anirudh Jaiswal",
      position: "Secretary",
      institution: "Department of Electronics and Communication Engineering, Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Ms. Anupriya Chettri",
      position: "Secretary",
      institution: "Sikkim Manipal College of Physiotherapy (SMCPT)",
    },
    {
      name: "Ms. Priya Gurung",
      position: "Student Coordinator",
      institution: "Sikkim Manipal College of Nursing (SMCON)",
    },
    {
      name: "Mr. Marli Bagra",
      position: "Executive Board Member",
      institution: "Department of Civil Engineering, Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Ms. Sonia Chhetri",
      position: "Executive Board Member",
      institution: "Sikkim Manipal College of Nursing (SMCON)",
    },
    {
      name: "Mr. Anay Kusre",
      position: "Executive Board Member",
      institution: "Department of Mechanical Engineering, Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Ms. Kezia Chettri",
      position: "Executive Board Member",
      institution: "Sikkim Manipal College of Physiotherapy (SMCPT)",
    },
    {
      name: "Ms. Ritusree Das",
      position: "Executive Board Member",
      institution: "Department of Computer Science & Engineering, Sikkim Manipal Institute of Technology (SMIT)",
    },
     {
      name: "Ms. Ekla Limboo",
      position: "Executive Board Member",
      institution: "Department of Allied Health Professions",
    },
    {
      name: "Mr. Sudip Singha",
      position: "Executive Board Member",
      institution: "Department of Information Technology, Sikkim Manipal Institute of Technology (SMIT)",
    },
     {
      name: "Mr. Tenhang Limboo",
      position: "Executive Board Member",
      institution: "Department of Medical Biotechnology, Sikkim Manipal Insitute of Medical Sciences (SMIMS)",
    },
    {
      name: "Ms. Pritika Biswas",
      position: "Executive Board Member",
      institution: "Department of Artificial Intelligence (AI) & Data Science (DS), Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Mr. Stephenas Gurung",
      position: "Executive Board Member",
      institution: "Department of Hospital Administration (DOHA)",
    },
    {
      name: "Mr. Rinchen Dorjee Bhutia",
      position: "Executive Board Member",
      institution: "Department of Humanities and Social Sciences (FHSSLA),Sikkim Manipal University (SMU)",
    },
    {
      name: "Mr. Nilay Dhakal ",
      position: "Executive Board Member",
      institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS)",
    }
  ];

  const exMembers = [
    {
      name: "Dr. Kartikeya Ojha",
      position: "President, Founder of SRF SMU",
      tenure: "2021-2022",
      institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS)",
    },
    {
      name: "Dr. Shreya Nandan",
      position: "President",
      tenure: "2022-2023",
      institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS)",
    },
    {
      name: "Mr Biswapriyo Sen",
      position: "President",
      tenure: "2022-2023",
      institution: "Sikkim Manipal Institute of Technology (SMIT)",
    },
     {
      name: "Mr. Kunal Sharma",
      position: "President",
      tenure: "2024-2025",
      institution: "Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Mr. Mayank Jaiswal",
      position: "Secretary",
      tenure: "2024-2025",
      institution: "Sikkim Manipal Institute of Technology (SMIT)",
    }
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
            <p>Email ID: vc@smu.edu.in</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">REGISTRAR</h3>
            <p>Prof (Dr.) Karma Sonam Sherpa</p>
            <p>Registrar, Sikkim Manipal University</p>
            <p>Email ID: registrar@smu.edu.in</p>
          </div>
          <div className="hidden md:block md:colspan-1"></div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DEAN, SMIMS</h3>
            <p>Dr. Muralidhar V Pai</p>
            <p>MBBS, DGO, MD (OBG), FICOG, FICMCH</p>
            <p>Dean, Sikkim Manipal Institute of Medical Sciences</p>
            <p>Sikkim Manipal University</p>
            <p>Email ID: dean@smims.smu.edu.in</p>
            <p>Phone No.: +91 3592-270535</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DIRECTOR,  SMIT</h3>
            <p>Prof. (Dr.) GL Sharma</p>
            <p>Director, Sikkim Manipal Institute of Technology</p>
            <p>Email ID: director.smit@smu.edu.in</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DIRECTOR, DOR</h3>
            <p>Dr. Kalpana Sharma,</p>
            <p>Director, Directorate of Research, Sikkim Manipal University</p>
            <p>Email ID: director.dor@smu.edu.in</p>
            <p>Phone No: +91 9563205842 | +91 9641580247</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">ASSOCIATE DIRECTOR (RESEARCH), SMIT
            </h3>
            <p>Prof. (Dr.) Chandrasekhar Bhuiyan,</p>
            <p>Professor &amp; HOD, Dept of Civil Engineering, Sikkim Manipal Institute of Technology</p>
            <p>Email ID: hod.ce@smit.smu.edu.in</p>
            <p>Phone No: 9836562555</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">ASSOCIATE DEAN (RESEARCH), SMIMS</h3>
            <p>Dr. Luna Adhikari,</p>
            <p>Professor &amp; HOD, Dept of Microbiology, SMIMS</p>
            <p>Email ID: luna.a@smims.smu.edu.in</p>
            <p>Phone No: 9434864772</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2"> HEAD OF DEPT., COMPUTER APPLICATIONS, SMIT
            </h3>
            <p>Prof. (Dr.) Samarjeet Borah</p>
            <p>Professor & Head, Department of Computer Application, Sikkim Manipal Institute of Technology</p>
            <p>Email ID: samarjeet.b@smit.smu.edu.in</p>
            <p>Phone No: 9832621898</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2"> REPRESENTATIVE, DIRECTORATE OF RESEARCH, SMU
            </h3>
            <p>Prof. (Dr.) Rubi Dey</p>
            <p>Professor, Department of Physiology, Sikkim Manipal Institute of Medical Sciences</p>
            <p>Email ID: rubi.d@smims.smu.edu.in</p>
            <p>Phone No: 9434709969</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2"> ADVISORY COUNCIL MEMBER
            </h3>
            <p>Prof. (Dr.) Bidita Khandelwal</p>
            <p>Professor, Department of Medicine, CRH & Sikkim Manipal Institute of Medical Sciences</p>
            <p>Email ID: bidita.k@smims.smu.edu.in</p>
            <p>Phone No: 9800865560</p>
          </div>
        </div>
      </section>

      {/* Chairperson SRF Section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Chairperson SRF</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">Chairperson, SRF SMIT</h3>
            <p>Dr Joydeep Biswas,</p>
            <p>
              Assistant Professor (Selection Grade), Dept. of Chemistry- SMIT
            </p>
            <p>Email ID: joydeep.biswas@smit.smu.edu.in</p>
            <p>Phone No: +91 9563318330</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">Chairperson, SRF SMU</h3>
            <p>Dr. Barkha Devi,</p>
            <p>Associate Professor, Sikkim Manipal College of Nursing</p>
            <p>Email ID: barkha.d@smims.smu.edu.in</p>
            <p>Phone No. +91 7479278673</p>
          </div>
        </div>
      </section>

      {/* Executive Council section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Executive Council</h2>
        <div className="overflow-x-auto">
          <table className="w-full mb-8 table-auto bg-white dark:bg-gray-800">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Institution</th>
              </tr>
            </thead>
            <tbody className="text-black dark:text-white">
              {members.map((member, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-black dark:border-gray-600">
                    {member.name}
                  </td>
                  <td className="px-4 py-2 border border-black dark:border-gray-600">
                    {member.position}
                  </td>
                  <td className="px-4 py-2 border border-black dark:border-gray-600">
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
          <table className="w-full mb-8 table-auto bg-white dark:bg-gray-800">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Tenure</th>
                <th className="px-4 py-2">Institution</th>
              </tr>
            </thead>
            <tbody className="text-black dark:text-white">
              {exMembers.map((member, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-black dark:border-gray-600">
                    {member.name}
                  </td>
                  <td className="px-4 py-2 border border-black dark:border-gray-600">
                    {member.position}
                  </td>
                  <td className="px-4 py-2 border border-black dark:border-gray-600">
                    {member.tenure}
                  </td>
                  <td className="px-4 py-2 border border-black dark:border-gray-600">
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
