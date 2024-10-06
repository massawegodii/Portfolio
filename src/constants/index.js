import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project13.png";

export const EXPERIENCES = [
  {
    year: "June 2024 - September 2024",
    role: "Developer Intern",
    company: "Global Revolution Company",
    description: `Built a loss weight monitory application that is used to assess weight of a person calculate BMI, BMR and Daily Calories burn through excercise and finally Tanzania Best Weight Loss Award.`,
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

export const EDUCATION = [
  {
    year: "October 2020 - August 2024",
    role: "Bachelor Degree in Computer Engineering",
    company: "Dar es salaam Institute of Technology (DIT)",
    description: `Dar es Salaam Institute of Technology (DIT), located in Dar es Salaam, Tanzania, is a premier institution specializing in engineering and technology education. It offers a variety of diploma and degree programs, emphasizing practical skills and hands-on learning to prepare students for the evolving job market. DIT is recognized for its commitment to research, innovation, and excellence in engineering and technology.`,
  },
  {
    year: "July 2018 - June 2020",
    role: "Advance Secondary School Education",
    company: "Galanos Secondary School",
    description: `Galanos Secondary School, located in Tanga, Tanzania, is a well-respected educational institution known for its strong emphasis on academic excellence. I studied Physics, Chemistry, and Mathematics (PCM) there, which provided me with a solid foundation in the sciences and analytical skills. The school is dedicated to fostering a supportive learning environment, encouraging students to develop critical thinking and problem-solving abilities essential for their future studies and careers.`,
  },
  {
    year: "January 2014 - November 2017",
    role: "Ordinary Secondary School Education",
    company: "Okaoni Secondary School",
    description: `Okaoni Secondary School, located in Moshi, Tanzania, is a prominent O-Level educational institution known for its commitment to academic excellence and student development. The school offers a robust curriculum that emphasizes a well-rounded education, preparing students for further studies and future careers. With a focus on creating a supportive and inclusive learning environment, Okaoni Secondary School encourages students to develop critical thinking, creativity, and leadership skills essential for success in today’s world.`,
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
    title: "Food Database and Video Session Training",
    image: project3,
    description: `The Food Database and Video Session Training is a system that is used to manage the food using picture and its calories, it is used to add food to the mobile application which we intergrate with it, it also have a video session program where you can add the recorded videos .`,
    technologies: [
      "React",
      "Spring boot",
      "MySQL",
      "GitHub",
    ],
  },
];

export const CONTACT = {
  address: "Makumbusho Road, Sinza Madukani, Dar es salaam.",
  phoneNo: "+255 753 193 439 | +255 624 279 007",
  email: "massaweg23@gmail.com",
};
