import "./Second.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faNodeJs,
  faGithub,
  faJs,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Second() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="block">
      <header className="banner" aria-label="Fullstack developer header">
        <p className="I">I'm a</p>
        <h1 className="role" data-aos="fade-up-right">
          Fullstack
        </h1>
        <h2 className="subtitle">Developer</h2>
      </header>
      <div>
        <FontAwesomeIcon
          className="angular"
          icon={faAngular}
          beatFade
          style={{ color: "#74C0FC", fontSize: "60px" }}
        />
        <FontAwesomeIcon
          className="node"
          icon={faNodeJs}
          beatFade
          style={{ color: "#0576cc", fontSize: "50px" }}
        />
        <FontAwesomeIcon
          className="java"
          icon={faJava}
          beatFade
          style={{ color: "#74C0FC", fontSize: "40px" }}
        />
      </div>

      <div
        role="main"
        className="container"
        aria-label="Developer technologies and skills section"
        data-aos="zoom-in-left"
      >
        <section
          className="code-card"
          aria-label="Code snippet about development skills"
        >
          <div className="window-controls" aria-hidden="true">
            <div className="window-close"></div>
            <div className="window-minimize"></div>
            <div className="window-maximize"></div>
          </div>

          <div className="code-line">
            <span className="line-number">1</span> I work with
            <span>Node.js,</span>
            <span>SpringBoot</span>and <span>Express.js</span>.
          </div>
          <div className="code-line">
            <span className="line-number">2</span> I build full-stack
            applications with <span>React,</span>
            <span>Angular</span>.
          </div>
          <div className="code-line">
            <span className="line-number">3</span> I specialize in{" "}
            <span>React and Angular</span>for Frontend development.
          </div>
          <div className="code-line">
            <span className="line-number">4</span> For Frontend i use{" "}
            <span>Typescript & Javascript</span>.
          </div>
          <div className="code-line">
            <span className="line-number">5</span> I use databases like{" "}
            <span>SQL</span> and <span>MongoDB,</span>
            <span>JDBC</span>.
          </div>
          <div className="code-line">
            <span className="line-number">6</span> I love to explore BlockChain
            Technologies.
          </div>
        </section>
      </div>
      <div>
        <FontAwesomeIcon
          className="react"
          icon={faReact}
          beatFade
          style={{ color: "#74C0FC", fontSize: "60px", marginTop: "20px" }}
        />
        <FontAwesomeIcon
          className="github"
          icon={faGithub}
          beatFade
          style={{ fontSize: "40px", color: "#" }}
        />
        <FontAwesomeIcon
          className="js"
          icon={faJs}
          beatFade
          style={{ color: "#f0db4f", fontSize: "40px" }}
        />
      </div>

      <div className="secondBlock">
        <p className="building">Building</p>
        <h1 className="se" data-aos="fade-up-left">
          seamless
        </h1>
        <h3 className="full">full-stack applications</h3>
      </div>
    </div>
  );
}

export default Second;
