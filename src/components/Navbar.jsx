import { useEffect, useState } from "react";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // need to make it all-screen friendly
    <div className="flex w-full justify-between gap-4 items-center px-10 py-5 text-white">
      <h1 className="text-3xl italic">MyPortfolio</h1>
      {showNav && (
        <>
          <div className="flex gap-12 icons">
            <a href="#project"> Projects </a>
            <a href="#tech"> Technologies </a>
            <a href="#about"> About Me </a>
          </div>
          <div className="icons">
            <a href="#!">
              <i className="fa-brands fa-github fa-2x px-4"></i>
            </a>
            <a href="#!">
              <i className="fa-brands fa-linkedin fa-2x px-4"></i>
            </a>
            <a href="#!">
              <i className="fa-solid fa-envelope fa-2x px-4"></i>
            </a>
            <a href="#!">
              <i className="fa-regular fa-comment fa-2x px-4"></i>
            </a>
          </div>
        </>
      )}
    </div>
  );
};
