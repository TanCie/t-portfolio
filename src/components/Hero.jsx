import micon from "../img/micon.gif";
import Resume from "../assets/Resume.pdf";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] w-full flex items-center p-12 md:p-24 justify-around bg-img text-white">
      <div className="w-full md:w-[40%] mt-16">
        {/* make h1 gradient color */}
        <h1 className="text-2xl md:text-4xl pb-8 grad">Hello, I'm Tanushree</h1>
        <p className="text-sm md:text-base pb-8">
          A passionate web developer with a keen interest in building responsive
          and interactive websites. A quick learner and I love to explore new
          technologies.
        </p>
        <Button
          text={
            <a href={Resume} target="_blank">
              My Resume
            </a>
          }
        />
      </div>
      <img className="h-60 md:h-96 myimg" src={micon} alt="my pic" />
    </div>
  );
};
