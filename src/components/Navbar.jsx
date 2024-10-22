import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setShowNav(false);
      } else {
        setShowNav(true);
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    // need to make it all-screen friendly
    <div className="flex w-full justify-between gap-4 items-center px-10 md:px-20 py-8 text-white">
      <h1 className="text-3xl italic">
        <a href="/">MyPortfolio</a>
      </h1>
      {showNav && (
        <>
          <div className="flex gap-12 icons">
            <HashLink smooth to="/#project">
              Projects
            </HashLink>
            <HashLink smooth to="/#tech">
              Technologies
            </HashLink>
            <HashLink smooth to="/#about">
              About Me
            </HashLink>

            <Link to="./Contact"> Contact Me </Link>
          </div>
        </>
      )}
      {!showNav && (
        <div className="icons">
          <button onClick={toggleNav} className="toggle">
            <i
              className={` fa-solid ${isOpen ? "fa-times" : "fa-bars"} fa-2x `}
            ></i>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="flex flex-col w-full items-end right-16 gap-4 absolute top-32 rounded-md">
          <HashLink smooth to="/#project">
            Projects
          </HashLink>
          <HashLink smooth to="/#tech">
            Technologies
          </HashLink>
          <HashLink smooth to="/#about">
            About Me
          </HashLink>
          <Link to="./Contact"> Contact Me </Link>
        </div>
      )}
    </div>
  );
};
