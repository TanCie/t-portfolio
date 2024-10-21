import React from "react";

export const AboutMe = () => {
  return (
    <div className="text-white flex gap-10 ml-10 mt-20">
      <div className="w-full">
        <h3 className="text-3xl">Education</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum
          dignissimos tempora error natus, velit quisquam quis dolorem
          voluptatem soluta.
        </p>
      </div>
      <div className="w-full">
        <h3 className="text-3xl">Courses completed</h3>
        <ul>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Fullstack Development</li>
        </ul>
      </div>
    </div>
  );
};
