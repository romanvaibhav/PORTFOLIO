import "./fourth.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
function Fourth() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="expcont">
      <div className="exp">
        <span className="exphigh">Experience</span>

        <div className="expcode" data-aos="zoom-in-left">
          <p>
            Web Blocks<span> | Software Engineer</span>
          </p>
          <p>Aug 2023 - Aug 2025</p>
          <hr />
          <ul style={{ lineHeight: "1.8" }}>
            <li>
              Contributed to establishing the company’s web presence, resulting
              in a remarkable 70% increase in online orders.Utilized TypeScript
              to reduce runtime errors by 60%, for more maintainable and
              reliable codebase.
            </li>
            <li>
              Conducted over 50+ code reviews, implemented best practices and
              agile methodologies, significantly reducing technical debt and
              enhancing overall code quality.
            </li>
            <li>
              TechStacks: HTML, CSS, JavaScript, Bootstrap, Typescript,
              React.js, Angular, Express.js, Node.js, AWS, MongoDB, MySQL.
            </li>
          </ul>
        </div>
        <div className="expcode" data-aos="zoom-in-right">
          <p>
            Angular Minds<span> | Trainee Software Engineer</span>
          </p>
          <p>Octomber 2024 - April 2025</p>
          <hr />
          <ul style={{ lineHeight: "1.8" }}>
            <li>
              Acquired experience in web development, specializing in the
              MEANstack. Achieved 100% responsiveness in webpage design,
              achieving optimal performance.
            </li>
            <li>
              Utilized TypeScript to reduce runtime errors by 60%, for more
              maintainable and reliable codebase.
            </li>
            <li>
              Increased system performance with 70% increase in efficiency while
              functionality and reliability.
            </li>
            <li>TechStack: TypeScript, Angular, Node.Js, AWS, Express.</li>
          </ul>
        </div>
        <div className="expcode" data-aos="zoom-in-left">
          <p>
            ITJOBXS<span> | SDE Intern</span>
          </p>
          <p>November 2023 - February 2024</p>
          <hr />
          <ul style={{ lineHeight: "1.8" }}>
            <li>
              Designed and developed the front-end of a fully responsive webpage
              using HTML, CSS, and JavaScript.
            </li>
            <li>
              WorkedonUser Verification/Authentication + Engineering challenges
              of detecting and removing the fake bots and posts. Adopted
              Recaptcha with the website- Google Layer Protection by 75% for
              websites.
            </li>
            <li>TechStacks: HTML, CSS, JS, Bootstrap, PHP, MySQL.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Fourth;
