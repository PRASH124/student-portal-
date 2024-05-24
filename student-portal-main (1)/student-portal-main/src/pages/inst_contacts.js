import React from 'react';
import '../css/inst_contacts.css'; // Import CSS file

const contactsData = [
  {
      "Sr no.": 1,
      "Name": "Prof. Rajat Moona",
      "Designation": "Director",
      "Email": "director@iiitvadodara.ac.in",
      "Contact Number": ""
  },
  {
      "Sr no.": 2,
      "Name": "Col Ravi Chugh",
      "Designation": "Registrar",
      "Email": "registrar@iiitvadodara.ac.in",
      "Contact Number": "8826893064"
  },
  {
      "Sr no.": 3,
      "Name": "Ashish Phophalia",
      "Designation": "Associate Dean Faculty Affairs",
      "Email": "ashish_p@iiitvadodara.ac.in",
      "Contact Number": "7698776722"
  },
  {
      "Sr no.": 4,
      "Name": "Barnali Chetia",
      "Designation": "HoD HSS and Sciences, Faculty Advisor 2021-22",
      "Email": "barnali@iiitvadodara.ac.in",
      "Contact Number": "8420345492"
  },
  {
      "Sr no.": 5,
      "Name": "Dhirendra Sinha",
      "Designation": "Associate Dean Academics - ICD, PIC UG",
      "Email": "dhirendra.sinha@iiitvadodara.ac.in",
      "Contact Number": "9427100970"
  },
  {
      "Sr no.": 6,
      "Name": "Jignesh Bhatt",
      "Designation": "HOD ECE , PIC PG",
      "Email": "jignesh.bhatt@iiitvadodara.ac.in",
      "Contact Number": "9409288312"
  },
  {
      "Sr no.": 7,
      "Name": "Naveen Kumar",
      "Designation": "HoD CSE and IT, Faculty Advisor 2022-23",
      "Email": "naveen_kumar@iiitvadodara.ac.in",
      "Contact Number": "8000086132"
  },
  {
      "Sr no.": 8,
      "Name": "Pratik Shah",
      "Designation": "Associate Dean Academics",
      "Email": "pratik@iiitvadodara.ac.in",
      "Contact Number": "9978918492"
  },
  {
      "Sr no.": 9,
      "Name": "Swapnil Lokhande",
      "Designation": "",
      "Email": "swapnil@iiitvadodara.ac.in",
      "Contact Number": "9433053376"
  },
  {
      "Sr no.": 10,
      "Name": "Ajay Nath",
      "Designation": "Associate Dean Student Affairs",
      "Email": "ajay.nath@iiitvadodara.ac.in",
      "Contact Number": "8229055650"
  },
  {
      "Sr no.": 11,
      "Name": "Bhupendra Kumar",
      "Designation": "PIC SSIP, Faculty Advisor 2023-24",
      "Email": "bhupendra_kumar@iiitvadodara.ac.in",
      "Contact Number": "8802154551"
  },
  {
      "Sr no.": 12,
      "Name": "Dibyendu Roy",
      "Designation": "Faculty Advisor 2020-21",
      "Email": "dibyendu.roy@iiitvadodara.ac.in",
      "Contact Number": "9474575596"
  },
  {
      "Sr no.": 13,
      "Name": "Kamal K Jha",
      "Designation": "Faculty Advisor 2023-24",
      "Email": "kamal@iiitvadodara.ac.in",
      "Contact Number": "7624024051"
  },
  {
      "Sr no.": 14,
      "Name": "Novarun Deb",
      "Designation": "PIC ICT, Faculty Advisor 2020-21",
      "Email": "novarun_deb@iiitvadodara.ac.in",
      "Contact Number": "7003585515"
  },
  {
      "Sr no.": 15,
      "Name": "Pramit Mazumdar",
      "Designation": "Hostel Warden",
      "Email": "pramit.mazumdar@iiitvadodara.ac.in",
      "Contact Number": "9337167027"
  },
  {
      "Sr no.": 16,
      "Name": "Sunandita Debnath",
      "Designation": "Faculty Advisor 2022-23",
      "Email": "sunandita_debnath@iiitvadodara.ac.in",
      "Contact Number": "9508370853"
  },
  {
      "Sr no.": 17,
      "Name": "Vivek Vyas",
      "Designation": "PIC Time Table, Faculty Advisor 2021-22",
      "Email": "vivek.vyas@iiitvadodara.ac.in",
      "Contact Number": "9003091984"
  },
  {
      "Sr no.": 18,
      "Name": "Vikas Kumar",
      "Designation": "Warden and General Admin - ICD",
      "Email": "vikas.kumar@iiitvadodara.ac.in",
      "Contact Number": "9106370426"
  },
  {
      "Sr no.": 19,
      "Name": "Varun Kumar",
      "Designation": "PIC Academics - ICD",
      "Email": "varun_kumar@diu.iiitvadodara.ac.in",
      "Contact Number": "8249065437"
  },
  {
      "Sr no.": 20,
      "Name": "Deepika Gupta",
      "Designation": "Girls Warden",
      "Email": "deepika_gupta@diu.iiitvadodara.ac.in",
      "Contact Number": "8707879931"
  },
  {
      "Sr no.": 21,
      "Name": "Gaurav Pareek",
      "Designation": "PIC Students Affairs & ICT - ICD",
      "Email": "gaurav_pareek@diu.iiitvadodara.ac.in",
      "Contact Number": "9837169800"
  }
];

function Inst_contacts() {
    return (
      <>
      <h1>Contacts:</h1>
        <table className="contacts-table">
            <thead>
                <tr>
                    <th>Sr no.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                {contactsData.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact["Sr no."]}</td>
                        <td>{contact["Name"]}</td>
                        <td>{contact["Designation"]}</td>
                        <td>{contact["Email"]}</td>
                        <td>{contact["Contact Number"]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default Inst_contacts;