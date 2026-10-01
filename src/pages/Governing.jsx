import React from "react";

/* ---------- Helpers ---------- */

const ContactCell = ({ phone, email }) => {
  const emails = [].concat(email || []);
  return (
    <>
      {emails.map((e) => (
        <div key={e}>{e}</div>
      ))}
      {phone && <div>{phone}</div>}
    </>
  );
};

const MemberTable = ({ rows, detailLabel = "Department / Institution" }) => (
  <div className="overflow-x-auto">
    <table className="w-full mb-8 table-auto bg-white dark:bg-gray-800">
      <thead className="bg-orange-500 text-white">
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Position</th>
          <th className="px-4 py-2">{detailLabel}</th>
          <th className="px-4 py-2">Contact</th>
        </tr>
      </thead>
      <tbody className="text-black dark:text-white">
        {rows.map((m, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border border-black dark:border-gray-600">{m.name}</td>
            <td className="px-4 py-2 border border-black dark:border-gray-600">{m.position}</td>
            <td className="px-4 py-2 border border-black dark:border-gray-600">{m.institution}</td>
            <td className="px-4 py-2 border border-black dark:border-gray-600">
              <ContactCell phone={m.phone} email={m.email} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Governing = () => {
  /* ---------- Faculty members (2026-27) ---------- */

  const smitFaculty = [
    { name: "Ms. Nitisha Pradhan", position: "Faculty Co-member", institution: "Assistant Professor I, Department of Computer Science and Engineering (CSE)", phone: "9734913844", email: "nitisha.p@smit.smu.edu.in" },
    { name: "Dr. Hari Bhakta Sharma", position: "Faculty Member", institution: "Assistant Professor II, Department of Civil Engineering", phone: "8559076655", email: "hari.s@smit.smu.edu.in" },
    { name: "Dr. Jitendra Singh Tamang", position: "Faculty Member", institution: "Assistant Professor (Selection Grade), Department of Electronics & Communication Engineering (ECE)", phone: "9382368521", email: "jitendra.t@smit.smu.edu.in" },
    { name: "Mr. Ashis Datta", position: "Faculty Member", institution: "Assistant Professor (Selection Grade), Department of Information Technology", phone: "9614066962", email: "ashis.d@smit.smu.edu.in" },
    { name: "Mr. Sital Sharma", position: "Faculty Member", institution: "Assistant Professor, Department of Artificial Intelligence (AI) & Data Science (DS)", phone: "7330987261", email: "sital.s@smit.smu.edu.in" },
    { name: "Dr. Partha Protim Das", position: "Faculty Member", institution: "Assistant Professor (Selection Grade), Department of Mechanical Engineering", phone: "9613228462", email: "partha.d@smit.smu.edu.in" },
    { name: "Ms. Kapila Sharma", position: "Faculty Member", institution: "Assistant Professor (Selection Grade), Department of Computer Applications", phone: "+91 7908112860", email: "kapila.s@smit.smu.edu.in" },
    { name: "Mr. Saikat Chatterjee", position: "Faculty Member", institution: "Assistant Professor I, Department of Electrical & Electronics Engineering", phone: "+91 8100511902", email: "saikat.c@smit.smu.edu.in" },
    { name: "Dr. Kalpana Panigrahi", position: "Faculty Member", institution: "Assistant Professor I, Department of Management Studies", phone: "9438537577", email: "kalpana.p@smit.smu.edu.in" },
    { name: "Dr. Sukanya Bhunia", position: "Faculty Member", institution: "Assistant Professor II, Department of Chemistry", phone: "8297765083", email: "sukanya.b@smit.smu.edu.in" },
    { name: "Dr. Bikash Thakuri", position: "Faculty Member", institution: "Assistant Professor I, Department of Mathematics", phone: "9617341872", email: "bikash.thakuri@smit.smu.edu.in" },
    { name: "Dr. Sanjib Kabi", position: "Faculty Member", institution: "Assistant Professor (Selection Grade), Department of Physics", phone: "+91 9434383736", email: "sanjib.k@smit.smu.edu.in" },
    { name: "Dr. Rakesh Vishwakarma", position: "Faculty Member", institution: "HoD, Department of Physical Education & Sports", phone: "7432051186", email: "rakesh.v@smit.smu.edu.in" },
    { name: "Dr. Jeshmeen Deb Barman", position: "Faculty Member", institution: "Assistant Professor, Department of Psychology", phone: "7076484462", email: "jeshmeen.d@smit.smu.edu.in" },
  ];

  const tadongFaculty = [
    { name: "Dr. Rinchen Doma Bhutia", position: "Faculty Member", institution: "Assistant Professor, Department of Biochemistry, SMIMS", phone: "9434979961", email: "rinchen.b@smims.smu.edu.in" },
    { name: "Dr. Quemeen Gurung", position: "Faculty Member", institution: "Assistant Professor, Sikkim Manipal College of Physiotherapy (SMCPT), SMU", phone: "7795532014", email: "quemeen.g@smims.smu.edu.in" },
    { name: "Miss Elizabeth W. Tsanglou", position: "Faculty Member", institution: "Lecturer, Department of Hospital Administration, SMU", phone: "7406116939", email: "elizabeth_202005003@livemail.smu.edu.in" },
    { name: "Ms. Chamma Gupta", position: "Faculty Member", institution: "Lecturer, Department of Biotechnology, SMIMS, SMU", phone: "8918718178", email: "chamma.gupta@smims.smu.edu.in" },
    { name: "Dr. Tenzing Doma Bhutia", position: "Faculty Member", institution: "Assistant Professor, Faculty of Humanities, Social Sciences and Liberal Arts (FHSSLA), SMU", phone: "7797751880", email: "tenzingdoma.bhutia@smu.edu.in" },
    { name: "Ms. Anusika Sharma", position: "Faculty Member", institution: "Lecturer, Department of Allied Health Professions" },
  ];

  /* ---------- Executive council (2026-27) ---------- */

  const smitExecutive = [
    { name: "Sonakshi Priya", position: "President", institution: "Department of Computer Science & Engineering (AI&ML)", phone: "+91 7033016360", email: "sonakshi_202400181@smit.smu.edu.in" },
    { name: "Donthu Neeraj", position: "Secretary", institution: "Department of Electronics & Communication Engineering (ECE)", phone: "+91 6303383369", email: "neeraj_202400366@smit.smu.edu.in" },
    { name: "Pritika Biswas", position: "Executive Board Member", institution: "Department of Artificial Intelligence (AI) & Data Science (DS)", phone: "8597898284", email: "pritika_202300210@smit.smu.edu.in" },
    { name: "Suhani Terway", position: "Executive Board Member", institution: "Department of Artificial Intelligence (AI) & Data Science (DS)", phone: "8800613369", email: "suhani_202300655@smit.smu.edu.in" },
    { name: "Tanisha Ghosh", position: "Executive Board Member", institution: "Department of Computer Science & Engineering (CSE)", phone: "9883233418", email: "tanisha_202300635@smit.smu.edu.in" },
    { name: "Riddhi Bhagat", position: "Executive Board Member", institution: "Department of Computer Science & Engineering (CSE)", phone: "9152086411", email: "riddhi_202400703@smit.smu.edu.in" },
    { name: "Nikhil Patnaik", position: "Executive Board Member", institution: "Department of Artificial Intelligence (AI) & Data Science (DS)", phone: "7894237415", email: "nikhil_202300488@smit.smu.edu.in" },
    { name: "Atharv Pratap Singh", position: "Executive Board Member", institution: "Department of Computer Science & Engineering (CSE)", phone: "9837809770", email: "atharv_202400526@smit.smu.edu.in" },
    { name: "Vikash Awasthi", position: "Executive Board Member", institution: "Department of Computer Science & Engineering (CSE)", phone: "7267023117", email: "vikash_202400498@smit.smu.edu.in" },
  ];

  const tadongExecutive = [
    { name: "Miss Sonam Zangmo Bhutia", position: "President", institution: "Sikkim Manipal College of Nursing (SMCON)", phone: "+91 9564964379", email: "sonam_201809052@smcon.smu.edu.in" },
    { name: "Mr. Amogh Rai", position: "Secretary", institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS)", phone: "+91 9474610847", email: "202401099_amogh@smims.smu.edu.in" },
    { name: "Ms. Samriddhi Maharjan", position: "Student Coordinator", institution: "Sikkim Manipal College of Physiotherapy (SMCPT)", phone: "8293051140", email: "smaridhi_202306022@smims.smu.edu.in" },
    { name: "Ms. Paymatika Ghosh", position: "Executive Board Member", institution: "Sikkim Manipal College of Nursing (SMCON)", phone: "8101334636", email: "202563001_paymantika@smcon.smu.edu.in" },
    { name: "Mr. Aavas Bomzan Tamang", position: "Executive Board Member", institution: "Bachelor of Physiotherapy", phone: "6295861819", email: "aavaastamang002@gmail.com" },
    { name: "Ms. Pisona Baraily", position: "Executive Board Member", institution: "Department of Medical Biotechnology, SMIMS", phone: "9572627623", email: "pisona_20222414@smims.smu.edu.in" },
    { name: "Mr. Mohit Sharma", position: "Executive Board Member", institution: "Department of Hospital Administration (DOHA)", phone: "8927825058" },
    { name: "Ms. Sweta Singh", position: "Executive Board Member", institution: "Department of Commerce (FHSSLA)", phone: "7407302489" },
    { name: "Mr. Bishal Kafley", position: "Executive Board Member", institution: "Department of Allied Health Professions", phone: "9907596432", email: "bishal_202407009@smims.smu.edu.in" },
    { name: "Ms. Abrarah Firdausi", position: "Executive Board Member", institution: "Sikkim Manipal Institute of Medical Sciences (SMIMS), 3rd Year MBBS", phone: "7577882124", email: ["abrarahfirdausi1509@gmail.com", "abrarah_202301001@smims.smu.edu.in"] },
  ];

  /* ---------- Team of officials (2026-27) ---------- */

  const smitOfficials = [
    { name: "Aditya", position: "Official", institution: "Department of Civil Engineering", phone: "7002165400", email: "dasa60798@gmail.com" },
    { name: "Rakesh Singh", position: "Official", institution: "Department of Civil Engineering", phone: "9006774899", email: "rakeshsingh377@gmail.com" },
    { name: "Vinayak Phukan", position: "Official", institution: "Department of Computer Science & Engineering", phone: "8595831640", email: "vinayak_202400444@smit.smu.edu.in" },
    { name: "Krittika Chakraborty", position: "Official", institution: "Department of Computer Science & Engineering", phone: "9831313691", email: "krittikachakraborty29@gmail.com" },
    { name: "Samrajni Bera", position: "Official", institution: "Department of Computer Science & Engineering", phone: "9883299810", email: "samrajni_202500153@smit.smu.edu.in" },
    { name: "Ishika Pathak", position: "Official", institution: "Department of Computer Science & Engineering", phone: "8434641918", email: "202643503@smit.smu.edu.in" },
    { name: "Tushar Jyoti Sarma", position: "Official", institution: "Department of Computer Science & Engineering", phone: "7896925656", email: "jyotisarmatushar991@gmail.com" },
    { name: "Spriha Bhattacharjee", position: "Official", institution: "Department of Computer Science & Engineering", phone: "8271963245", email: "spriha_202500531@smit.smu.edu.in" },
    { name: "Kumar Gaurish", position: "Official", institution: "Department of Computer Science & Engineering", phone: "9472596725", email: "kumar_202500218@smit.smu.edu.in" },
    { name: "Sristi Roy", position: "Official", institution: "Department of Computer Science & Engineering", phone: "6289142358", email: "bmayabana@gmail.com" },
    { name: "Ashwini Singh", position: "Official", institution: "Department of Computer Science & Engineering", phone: "9641159119", email: "ashwin_202400013@smit.smu.edu.in" },
    { name: "Avi Sharma", position: "Official", institution: "Department of Computer Science & Engineering", phone: "7703891334", email: "sir.avi04@gmail.com" },
    { name: "Aman Kumar", position: "Official", institution: "Department of Computer Applications", phone: "9523127216", email: "aman_202416057@smit.smu.edu.in" },
    { name: "Tanisha Barolia", position: "Official", institution: "Department of Computer Applications", phone: "7780077835", email: "tanisha_202416059@smit.smu.edu.in" },
    { name: "Ayush Chettri", position: "Official", institution: "Department of Computer Applications", phone: "9382270058", email: "ayush_202416078@smit.smu.edu.in" },
    { name: "Gopal Gupta", position: "Official", institution: "Department of Computer Applications", phone: "6297092790", email: "gopal9800857369up@gmail.com" },
    { name: "Diki", position: "Official", institution: "Department of Computer Applications", phone: "8617682720", email: "dikkichomuladakhi2007@gmail.com" },
    { name: "Diganta Kalita", position: "Official", institution: "Department of Physics", phone: "8751952939", email: "diganta_202536810@smit.smu.edu.in" },
    { name: "Rehang Sinchel Rai", position: "Official", institution: "Department of Physics", phone: "7548061586", email: "rehang_202536805@smit.smu.edu.in" },
    { name: "Vishal Poddar", position: "Official", institution: "Department of Psychology", phone: "7099692945", email: "vishalpoddar9988@gmail.com" },
    { name: "Deepam Pradhan", position: "Official", institution: "Department of Psychology", phone: "7865073605", email: "deepam_202444126@smit.smu.edu.in" },
    { name: "Anit Kumar Nayak", position: "Official", institution: "Department of Psychology", phone: "9286031613", email: "anitnayak175@gmail.com" },
    { name: "Nidhi Bhattacharya", position: "Official", institution: "Department of Psychology", phone: "7847980595", email: "nidhibhattacharyaa@gmail.com" },
    { name: "Sangay Ongmu Bhutia", position: "Official", institution: "Department of Chemistry", phone: "8391805103", email: "sangayongmubhutia39@gmail.com" },
    { name: "Viniv Bastakoti", position: "Official", institution: "Department of Chemistry", phone: "7063662152", email: "vinivkaushik@gmail.com" },
    { name: "Altina Das", position: "Official", institution: "Department of Chemistry", email: "altina_202336610@smit.smu.edu.in" },
    { name: "Aditya Raina", position: "Official", institution: "Department of Chemistry", email: "aditya_22636611@smit.smu.edu.in" },
  ];

  const tadongOfficials = [
    { name: "Vaishnavi Sharma", position: "Official", institution: "MBBS, Sikkim Manipal Institute of Medical Sciences (SMIMS)", phone: "9263756505", email: "memorie127@gmail.com" },
    { name: "Anish Singh", position: "Official", institution: "MBBS, Sikkim Manipal Institute of Medical Sciences (SMIMS)", phone: "8957019012", email: "rsahaghy06@gmail.com" },
    { name: "Bali Hang Limboo", position: "Official", institution: "MBBS, Sikkim Manipal Institute of Medical Sciences (SMIMS)", phone: "8159034590", email: "202401075_bali@smims.smu.edu.in" },
    { name: "Ms. Supriya Gurung", position: "Official", institution: "BSc Medical Biotechnology", phone: "9832198338", email: "supriyagurung1703@gmail.com" },
    { name: "Mr. Prashant Rai", position: "Official", institution: "BSc Medical Biotechnology", phone: "9593949027", email: "prashantrai5957@gmail.com" },
    { name: "Mr. Shoriya Gupta", position: "Official", institution: "Department of Medical Biotechnology", phone: "9339696881" },
    { name: "Ms. Dechen Choden Lama", position: "Official", institution: "B.A. VI Semester, Faculty of Humanities, Social Sciences and Liberal Arts (FHSSLA)", phone: "8918700529" },
    { name: "Sakib Hasan", position: "Official", institution: "M.A. English 2nd Semester, FHSSLA", phone: "8617378906" },
    { name: "Salina Guagai", position: "Official", institution: "M.Com 2nd Semester, FHSSLA", phone: "8101430675" },
    { name: "Supriya Singh", position: "Official", institution: "M.A. Political Science 2nd Semester, FHSSLA", phone: "+91 8250770315" },
    { name: "Ms. Subarna Dawari", position: "Official", institution: "MSc Nursing, Sikkim Manipal College of Nursing (SMCON)", phone: "8637806234", email: "202563008_subarna@smcon.smu.edu.in" },
    { name: "Ms. Sharstika Sharma", position: "Official", institution: "MSc Nursing, Sikkim Manipal College of Nursing (SMCON)", phone: "8371826414", email: "202563004_sharstika@smcon.smu.edu.in" },
    { name: "Ms. Ashnita Lama", position: "Official", institution: "MSc Nursing, Sikkim Manipal College of Nursing (SMCON)", phone: "8159056723", email: "202563023_ashnita@smcon.smu.edu.in" },
    { name: "Ms. Ipsita Sharma", position: "Official", institution: "MSc Nursing, Sikkim Manipal College of Nursing (SMCON)", phone: "8617339047", email: "mayalmithlepcha57@gmail.com" },
    { name: "Ms. Samridhi Khati", position: "Official", institution: "Bachelor of Physiotherapy, Sikkim Manipal College of Physiotherapy (SMCPT)", phone: "9749795665", email: "sridhi830@gmail.com" },
    { name: "Mr. Natul Ligu", position: "Official", institution: "Bachelor of Physiotherapy, Sikkim Manipal College of Physiotherapy (SMCPT)", phone: "6207511405", email: "202506027_natul@smims.smu.edu.in" },
    { name: "Ms. Hima Tamang", position: "Official", institution: "Department of Hospital Administration (DOHA)", phone: "7029339450", email: "202403005_hima@smims.smu.edu.in" },
    { name: "Mr. Anup Sharma", position: "Official", institution: "Department of Hospital Administration (DOHA)" },
    { name: "Divya Seva", position: "Official", institution: "BMIT 1st Year, Department of Allied Health Professions", phone: "8927181380" },
    { name: "Angella Sherpa", position: "Official", institution: "BMIT 1st Year, Department of Allied Health Professions", phone: "6295919086" },
    { name: "Sangey Choden Bhutia", position: "Official", institution: "BMIT 1st Year, Department of Allied Health Professions", phone: "9635987169" },
  ];

  /* ---------- Former executive council ---------- */

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
    },
    {
      name: "Ms. Torsha Guha",
      position: "President",
      tenure: "2025-2026",
      institution: "Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Mr. Anirudh Jaiswal",
      position: "Secretary",
      tenure: "2025-2026",
      institution: "Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Mr. Pranit Rai",
      position: "President",
      tenure: "2025-2026",
      institution: "Department of Humanities and Social Sciences (FHSSLA), Sikkim Manipal University (SMU)",
    },
    {
      name: "Ms. Anupriya Chhetri",
      position: "Secretary",
      tenure: "2025-2026",
      institution: "Sikkim Manipal College of Physiotherapy (SMCPT)",
    },
    {
      name: "Ms. Pritika Biswas",
      position: "President",
      tenure: "2025-2026",
      institution: "Sikkim Manipal Institute of Technology (SMIT)",
    },
    {
      name: "Mr. Nikhil Patnaik",
      position: "Secretary",
      tenure: "2025-2026",
      institution: "Sikkim Manipal Institute of Technology (SMIT)",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-800 font-poppins text-center mb-8">
        Governing Council
      </h1>

      {/* University Leadership section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">VICE CHANCELLOR</h3>
            <p>Prof. (Dr.) Gopalakrishna Prabhu K</p>
            <p>Vice Chancellor, Sikkim Manipal University</p>
            <p>Email ID: vc@smu.edu.in</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">REGISTRAR</h3>
            <p>Prof (Dr.) Karma Sonam Sherpa</p>
            <p>Registrar, Sikkim Manipal University</p>
            <p>Email ID: registrar.smu@smu.edu.in</p>
            <p>Phone No.: +91 9434012546</p>
          </div>
          <div className="hidden md:block md:colspan-1"></div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DEAN, SMIMS</h3>
            <p>Dr. Muralidhar V Pai</p>
            <p>MBBS, DGO, MD (OBG), FICOG, FICMCH</p>
            <p>Pro Vice Chancellor, Sikkim Manipal University &amp; Dean, Sikkim Manipal Institute of Medical Sciences</p>
            <p>Email ID: dean@smims.smu.edu.in</p>
            <p>Phone No.: +91 3592-270535</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DIRECTOR, SMIT</h3>
            <p>Prof. (Dr.) Savitha G. Kini</p>
            <p>Director, Sikkim Manipal Institute of Technology</p>
            <p>Email ID: director.smit@smu.edu.in</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">DIRECTOR, DOR</h3>
            <p>Dr. Kalpana Sharma</p>
            <p>Professor, Dept. of CSE, SMIT &amp; Director, Directorate of Research, Sikkim Manipal University</p>
            <p>Email ID: director.dor@smu.edu.in</p>
            <p>Phone No: +91 9562030842 | +91 9641580247</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">ASSOCIATE DIRECTOR (RESEARCH), SMIT</h3>
            <p>Prof. (Dr.) Chandrasekhar Bhuiyan</p>
            <p>Professor &amp; HOD, Dept of Civil Engineering, Sikkim Manipal Institute of Technology</p>
            <p>Email ID: hod.ce@smit.smu.edu.in</p>
            <p>Phone No: 9836562555</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">ASSOCIATE DEAN (RESEARCH), SMIMS</h3>
            <p>Prof. (Dr.) Ashish Pradhan</p>
            <p>Professor &amp; HOD, Dept of Paediatrics, SMIMS</p>
            <p>Email ID: ashish.p@smims.smu.edu.in</p>
            <p>Phone No: 9800959399</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">HEAD OF DEPT., COMPUTER APPLICATIONS, SMIT</h3>
            <p>Prof. (Dr.) Samarjeet Borah</p>
            <p>Professor &amp; Head, Department of Computer Applications, Sikkim Manipal Institute of Technology</p>
            <p>Email ID: samarjeet.b@smit.smu.edu.in</p>
            <p>Phone No: 9832621898</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">REPRESENTATIVE, DIRECTORATE OF RESEARCH, SMU</h3>
            <p>Prof. (Dr.) Rubi Dey</p>
            <p>Professor, Department of Physiology, SMIMS</p>
            <p>Email ID: rubi.d@smims.smu.edu.in</p>
            <p>Phone No: 9434709969</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">ADVISORY COUNCIL MEMBER</h3>
            <p>Prof. (Dr.) Bidita Khandelwal</p>
            <p>Professor, Department of Medicine, CRH &amp; SMIMS</p>
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
            <p>Dr. Jhuma Sunuwar</p>
            <p>
              Assistant Professor (Selection Grade), Dept. of Computer Science &amp; Engineering (CSE), SMIT
            </p>
            <p>Email ID: jhuma.s@smit.smu.edu.in</p>
            <p>Phone No: +91 9832345976</p>
          </div>
          <div className="p-4 text-white bg-orange-500 rounded-xl">
            <h3 className="font-bold mb-2">Chairperson, SRF SMU</h3>
            <p>Dr. Barkha Devi</p>
            <p>
              Associate Professor, Department of Obstetrics and Gynecological Nursing, Sikkim Manipal College of Nursing (SMCON)
            </p>
            <p>Email ID: barkha.d@smims.smu.edu.in</p>
            <p>Phone No: +91 7479278673 | +91 8768934164</p>
          </div>
        </div>
      </section>

      {/* Faculty Members section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Faculty Members</h2>
        <h3 className="text-xl font-semibold mb-3">SMIT Campus</h3>
        <MemberTable rows={smitFaculty} detailLabel="Designation / Department" />
        <h3 className="text-xl font-semibold mb-3">Tadong Campus</h3>
        <MemberTable rows={tadongFaculty} detailLabel="Designation / Department" />
      </section>

      {/* Executive Council section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Executive Council (2026-27)</h2>
        <h3 className="text-xl font-semibold mb-3">SMIT Campus</h3>
        <MemberTable rows={smitExecutive} detailLabel="Department" />
        <h3 className="text-xl font-semibold mb-3">Tadong Campus</h3>
        <MemberTable rows={tadongExecutive} detailLabel="Institution" />
      </section>

      {/* Team of Officials section */}
      <section className="mb-12">
        <h2 className="text-3xl mb-4">Team of Officials</h2>
        <h3 className="text-xl font-semibold mb-3">SMIT Campus</h3>
        <MemberTable rows={smitOfficials} detailLabel="Department" />
        <h3 className="text-xl font-semibold mb-3">Tadong Campus</h3>
        <MemberTable rows={tadongOfficials} detailLabel="Programme / Institution" />
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