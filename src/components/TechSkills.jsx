import pythonImg from "../img/png/001-python.png";
import databaseImg from "../img/png/002-database.png";
import gitImg from "../img/png/003-git.png";
import css3Img from "../img/png/004-css-3.png";
import html5Img from "../img/png/005-html-5.png";
import jsImg from "../img/png/006-js.png";
import visualStudioImg from "../img/png/007-visual-studio.png";
import sqlImg from "../img/png/008-sql.png";
import nodejsImg from "../img/png/009-nodejs.png";

const skills = [
  {
    id: 1,
    skill: "Python",
    image: pythonImg,
  },
  {
    id: 2,
    skill: "Database",
    image: databaseImg,
  },
  {
    id: 3,
    skill: "Git",
    image: gitImg,
  },
  {
    id: 4,
    skill: "CSS3",
    image: css3Img,
  },
  {
    id: 5,
    skill: "HTML5",
    image: html5Img,
  },
  {
    id: 6,
    skill: "JavaScript",
    image: jsImg,
  },
  {
    id: 7,
    skill: "Visual Studio",
    image: visualStudioImg,
  },
  {
    id: 8,
    skill: "SQL",
    image: sqlImg,
  },
  {
    id: 9,
    skill: "Node.js",
    image: nodejsImg,
  },
];

export const TechSkills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <h3 className="text-white my-10 text-center text-3xl">
        Languages / Frameworks
      </h3>
      <div className="w-[70%] flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="inline-flex items-center border rounded-xl border-gray-400 px-5 py-2 m-4 gap-3 text-white"
          >
            <img
              src={skill.image}
              alt={skill.skill}
              className="w-10 h-10 object-contain"
            />
            <p className="text-md md:text-lg">{skill.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
