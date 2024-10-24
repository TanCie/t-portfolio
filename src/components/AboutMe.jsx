/* eslint-disable react/no-unescaped-entities */
export const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex justify-center text-center text-gray-200 gap-10 m-20"
    >
      <div className="w-full flex flex-col items-center justify-start">
        <h3 className="text-3xl md:text-4xl py-10 font-semibold font-mono">
          Education
        </h3>
        <div>
          <h5 className="font-bold text-base md:text-xl">
            Masters in Computer Science
          </h5>
          <p className="italic">Aug 2021 - Jun 2023</p>
          <p>NSHM College, Durgapur</p>

          <br />

          <h5 className="font-bold text-base md:text-xl">
            Bachelors in Mathematics
          </h5>
          <p className="italic">Aug 2016 - Oct 2020</p>
          <p>St. Xavier's College, Kolkata</p>

          <br />

          <h5 className="font-bold text-base md:text-xl">
            Higher Secondary (XII) CBSE
          </h5>
          <p className="italic">Apr 2014 - Jun 2016</p>
          <p>DAV Model School, Durgapur</p>
          <br />

          <h5 className="font-bold text-base md:text-xl">Secondary (X) ICSE</h5>
          <p className="italic">Jun 2002 - Mar 2014</p>
          <p>Steel Carmel School, Durgapur</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-start">
        <h3 className="text-3xl md:text-4xl py-10 font-semibold font-mono">
          Certifications
        </h3>
        <ul className="text-base md:text-lg italic flex flex-col gap-2">
          <li>Web Development - Scrimba</li>
          <li>JavaScript Algorithms - freeCodeCamp</li>
          <li>AWS Cloud Foundations - edX</li>
        </ul>
      </div>
    </div>
  );
};
