import "./Third.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Third() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about">
      <div className="highlight">
        <h1 className="high">About Me</h1>
      </div>
      <div className="code" data-aos="zoom-in-right">
        <p className="content">
          I am a highly enthusiastic and driven fullstack developer, completed
          my Bachelor's degree from JSPM's BSIOTR at Pune University. I have 1+
          year of Software Devlopment experience. In addition to my Technical
          skills, I have always had a keen interest in Technology, which has
          been evident since my childhood. I have been actively involved in web
          development since the 8th grade and have consistently challenged
          myself to enhance my coding skills throughout High School. I believe
          in the power of continuous learning, and I am committed to staying
          abreast of emerging technologies. I am confident in my potential and
          thrive in an environment surrounded by like-minded individuals. Open
          for the Software Engineering roles - Frontend, Backend, FullStack
          Developer.|
        </p>
      </div>
    </div>
  );
}

export default Third;
