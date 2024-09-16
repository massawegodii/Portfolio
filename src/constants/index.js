import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project-3.jpg";

export const EXPERIENCES = [
  {
    year: "June 2024 - September 2024",
    role: "Developer Intern",
    company: "Global Revolution Company",
    description: `Built a loss weight monitory application that is used to assess weight of a person calculate BMI, BMR and Daily Calories burn through excercise and finally Tanzania Best Weight Loss Award .`,
    technologies: [
      "Spring boot",
      "Flutter",
      "Angular",
      "API",
      "Nginx",
      "mySQL",
    ],
  },
  {
    year: "August 2023 - October 2023",
    role: "Web Development Intern",
    company: "Tanzania Telecommunications Cooperation (TTCL)",
    description: `Developed an asset management system using spring boot at the server-side and angular js at the client-side, i also implement the messaging mechanism using the twillio and create responsive dashboard using material ui.`,
    technologies: ["Spring boot", "Angular js","React js"],
  },
  {
    year: "August 2022 - October 2022",
    role: "Web Development",
    company: "Dar Es Salaam Institute of Technology (DIT)",
    description: `Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Focused on enhancing user interaction and interface aesthetics.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Kiganjani Medical Check App",
    image: project1,
    description: `A healthcare application used in loss weight monitory with the help of doctor guideline build using flutter and spring boot in the server side.`,
    technologies: ["Dart", "Flutter", "API's", "Spring boot"],
  },

  {
    title: "Asset Management System",
    image: project2,
    description: `Asset Management System that is used to manage all the assets in office include electronics equipment, furniture as well as documents, this system also provide a maintenance subsystem that give notification when the maintenance period reach, it also manage all the user's and users that have been given privilege can send normal message(sms) to the other users.`,
    technologies: ["Java Spring boot", "Angular", "API", "Twillio SMS"],
  },

  {
    title: "DUT Ticket System",
    image: project3,
    description: `The DUT Ticket System was developed as part of a Work-Integrated Learning (WIL) academic module. This collaborative project created an efficient platform for managing student queries at Durban University of Technology (DUT), streamlining academic and administrative inquiries for timely and effective responses.`,
    technologies: [
      "Microsoft Azure",
      "ASP.NET",
      "SQL",
      ".NET Framework",
      "CRUD",
      "GitHub",
    ],
  },
];

export const CONTACT = {
  address: "Makumbusho Road, Sinza Madukani, Dar es salaam.",
  phoneNo: "+255 753 193 439 | +255 624 279 007",
  email: "massaweg23@gmail.com",
};
