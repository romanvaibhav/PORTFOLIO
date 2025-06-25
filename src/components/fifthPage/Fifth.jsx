import "./style.css";
import { useState } from "react";
function Fifth() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="techBox">
      <div className="bts">
        <div>
          <button className="Projext" onClick={() => setActiveTab("projects")}>
            Projects
          </button>
        </div>
        <div>
          <button className="Projext" onClick={() => setActiveTab("skills")}>
            Technical Skills
          </button>
        </div>
        <div>
          <button className="Projext" onClick={() => setActiveTab("education")}>
            Education
          </button>
        </div>
      </div>

      {activeTab === "projects" && (
        <div className="projectsWrapper ">
          <div className="projectDiv">
            <div className="imgdiv">
              <img src="/src/assets/Screenshot 2025-06-20 024722.png" alt="" />
            </div>
            <div className="namingProject">
              <h4>Dashboard-Panel</h4>
              <div className="sepLiveCode">
                <a
                  className="atag"
                  href="https://react-dashboard-panel2025.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
                <button className="codeBtn">Code</button>
              </div>
            </div>
            <div className="projDesc">
              <p>
                Dashboard Panel is a dynamic and responsive user interface built
                using React.js, styled with CSS and structured in HTML.
              </p>
            </div>
            <div>
              <div className="techBadge">React</div>
              <div className="techBadge">HTML</div>
              <div className="techBadge">CSS</div>
            </div>
          </div>

          <div className="projectDiv">
            <img src="/src/assets/Screenshot 2025-06-20 024722.png" alt="" />
          </div>
          <div className="projectDiv">
            <img src="/src/assets/Screenshot 2025-06-20 024722.png" alt="" />
          </div>
          <div className="projectDiv">
            <img src="/src/assets/Screenshot 2025-06-20 024722.png" alt="" />
          </div>
          <div className="projectDiv">
            <img src="/src/assets/Screenshot 2025-06-20 024722.png" alt="" />
          </div>
        </div>
      )}

      {activeTab === "skills" && (
        <div className="TechSkills">
            
          {/* Technical Skills Content */}
          <h2>Technical Skills</h2>
          <p>React, Angular, Node.js, Express, MongoDB, PostgreSQL...</p>
        </div>
      )}

      {activeTab === "education" && (
        <div className="Education">
          {/* Education Content */}
          <h2>Education</h2>
          <p>
            Bachelor’s in Computer Engineering - JSPM's BSIOTR, Pune University
          </p>
        </div>
      )}
    </div>
  );
}
export default Fifth;
