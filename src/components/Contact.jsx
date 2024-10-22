import { useEffect, useState } from "react";

const Contact = () => {
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setShowContact(false);
      } else {
        setShowContact(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden text-center bg-img text-white contact">
      <h2 className="text-3xl py-24">
        Connect with Me
        <i className="fa-solid fa-mug-hot px-3"></i>
      </h2>
      {showContact && (
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <p className="flex items-center text-lg">
                <i className="fa-brands fa-linkedin fa-2x px-4"></i>
                Connect with me on LinkedIn:{" "}
              </p>
            </div>

            <div className="flex items-center gap-10">
              <p className="flex items-center text-lg">
                <i className="fa-brands fa-github fa-2x px-4"></i>
                Find me on GitHub:{" "}
              </p>
            </div>

            <div className="flex items-center gap-10">
              <p className="flex items-center text-lg">
                <i className="fa-brands fa-whatsapp fa-2x px-4"></i>
                Call / Message me at:{" "}
              </p>
            </div>

            <div className="flex items-center gap-10">
              <p className="flex items-center text-lg">
                <i className="fa-solid fa-envelope fa-2x px-4"></i>
                Reach out on Email:{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start text-lg justify-center gap-6">
            <a href="">Tanushree Chakravorty</a>
            <a href="">TanCie</a>
            <a href="">+91 8240727261</a>
            <a href="">tanushree998@gmail.com</a>
          </div>
        </div>
      )}

      {!showContact && (
        <div className="flex flex-col gap-4">
          <a href="">
            <i className="fa-brands fa-linkedin px-4"></i>
            Tanushree Chakravorty
          </a>
          <a href="">
            <i className="fa-brands fa-github px-4"></i>
            TanCie
          </a>

          <a href="">
            <i className="fa-brands fa-whatsapp px-4"></i>
            +91 8240727261
          </a>

          <a href="">
            <i className="fa-solid fa-envelope px-4"></i>
            tanushree998@gmail.com
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
