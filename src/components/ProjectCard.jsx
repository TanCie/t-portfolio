import Button from "./Button";

const ProjectCard = (props) => {
  const { title, desc, link, gitLink, image } = props.project;

  return (
    <div className="flex flex-col w-full lg:w-1/3 gap-6 items-center justify-center text-white">
      <div className="w-2/3 lg:w-[80%]  rounded-lg p-6 border-2">
        <div className=" flex flex-col gap-2">
          <img className="w-full h-64" src={image} alt="site page" />
          <h3 className="text-xl font-bold pt-2">{title}</h3>
          <p className="font-thin">{desc}</p>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap gap-6 w-full mt-6">
          <Button
            classNames="w-full"
            text={<a href={link}>Live preview</a>}
          ></Button>
          {/* how to change background */}
          <Button
            classNames="btn-g w-full"
            text={<a href={gitLink}>GitHub</a>}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
