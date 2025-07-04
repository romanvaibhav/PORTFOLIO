import "./style.css";
import { useState } from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import dashboard from "../../assets/dashboard.png";
import portfolio from "../../assets/Portfolio.png";

import { useEffect } from "react";
function Fifth() {
  const [activeTab, setActiveTab] = useState("projects");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
            Tech Skills
          </button>
        </div>
        <div>
          <button className="Projext" onClick={() => setActiveTab("education")}>
            Education
          </button>
        </div>
      </div>

      {activeTab === "projects" && (
        <div className="fixdiv">
          <div className="projectsWrapper ">
            <div className="projectDiv" data-aos="fade-up-right">
              <div className="imgdiv">
                <img src={dashboard} alt="" />
              </div>
              <div className="namingProject">
                <h4>Dashboard-Panel</h4>
                <div className="sepLiveCode">
                  <a
                    className="atag"
                    href="https://react-dashboard-panel2025.netlify.app/"
                    target="_blank"
                    style={{
                      marginRight: "25px",
                      color: "blue",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                  <a
                    href="  https://github.com/romanvaibhav/Dashboard-Panel-React.js
"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 -4 24 24"
                      style={{ fill: "#FFFFFF" }}
                    >
                      <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.016 10.936c.586.11.797-.254.797-.566v-2.1c-3.264.71-3.95-1.576-3.95-1.576a3.11 3.11 0 00-1.304-1.714c-1.064-.73.082-.716.082-.716a2.465 2.465 0 011.797 1.205 2.5 2.5 0 003.408.978 2.517 2.517 0 01.75-1.57c-2.6-.296-5.336-1.3-5.336-5.79a4.533 4.533 0 011.204-3.143 4.212 4.212 0 01.115-3.102s.981-.31 3.216 1.193a11.09 11.09 0 015.856 0c2.23-1.504 3.213-1.193 3.213-1.193a4.212 4.212 0 01.117 3.102 4.533 4.533 0 011.203 3.143c0 4.505-2.74 5.49-5.35 5.78a2.807 2.807 0 01.812 2.174v3.222c0 .314.21.68.8.565A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
                    </svg>
                  </a>{" "}
                </div>
              </div>
              <div className="projDesc">
                <p>
                  Dashboard Panel is a dynamic and responsive user interface
                  built using React.js, styled with CSS and structured in HTML.
                </p>
              </div>
              <div>
                <div className="techBadge">React</div>
                <div className="techBadge">HTML</div>
                <div className="techBadge">CSS</div>
              </div>
            </div>

            <div className="projectDiv" data-aos="fade-up">
              <div className="imgdiv">
                <img src={portfolio} alt="" />
              </div>

              <div className="namingProject">
                <h4>Portfolio</h4>
                <div className="sepLiveCode">
                  <a
                    className="atag"
                    href=""
                    target="_blank"
                    style={{
                      marginRight: "25px",
                      color: "blue",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                  <a
                    href=" https://github.com/romanvaibhav/Portfolio
"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: "#FFFFFF" }}
                    >
                      <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.016 10.936c.586.11.797-.254.797-.566v-2.1c-3.264.71-3.95-1.576-3.95-1.576a3.11 3.11 0 00-1.304-1.714c-1.064-.73.082-.716.082-.716a2.465 2.465 0 011.797 1.205 2.5 2.5 0 003.408.978 2.517 2.517 0 01.75-1.57c-2.6-.296-5.336-1.3-5.336-5.79a4.533 4.533 0 011.204-3.143 4.212 4.212 0 01.115-3.102s.981-.31 3.216 1.193a11.09 11.09 0 015.856 0c2.23-1.504 3.213-1.193 3.213-1.193a4.212 4.212 0 01.117 3.102 4.533 4.533 0 011.203 3.143c0 4.505-2.74 5.49-5.35 5.78a2.807 2.807 0 01.812 2.174v3.222c0 .314.21.68.8.565A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
                    </svg>
                  </a>{" "}
                </div>
              </div>
              <div className="projDesc">
                <p>
                  This is a Portfolio website built with React.js for a dynamic
                  user interface, leveraging JavaScript (ES6+) for core logic.
                  Tailwind CSS was used extensively to achieve a clean styling
                  approach.
                </p>
              </div>
              <div>
                <div className="techBadge">HTML</div>
                <div className="techBadge">Tailwind</div>
                <div className="techBadge">Javascript</div>
                <div className="techBadge">React.js</div>
              </div>
            </div>

            <div className="projectDiv" data-aos="fade-left">
              <div className="imgdiv">
                <img src="/src/assets/Portfolio.png" alt="" />
              </div>

              <div className="namingProject">
                <h4>FindTalent Session</h4>
                <div className="sepLiveCode">
                  <a
                    className="atag"
                    href="https://react-dashboard-panel2025.netlify.app/"
                    target="_blank"
                    style={{
                      marginRight: "25px",
                      color: "blue",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                  <a
                    href=" https://github.com/romanvaibhav/Interview_Session
"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: "#FFFFFF" }}
                    >
                      <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.016 10.936c.586.11.797-.254.797-.566v-2.1c-3.264.71-3.95-1.576-3.95-1.576a3.11 3.11 0 00-1.304-1.714c-1.064-.73.082-.716.082-.716a2.465 2.465 0 011.797 1.205 2.5 2.5 0 003.408.978 2.517 2.517 0 01.75-1.57c-2.6-.296-5.336-1.3-5.336-5.79a4.533 4.533 0 011.204-3.143 4.212 4.212 0 01.115-3.102s.981-.31 3.216 1.193a11.09 11.09 0 015.856 0c2.23-1.504 3.213-1.193 3.213-1.193a4.212 4.212 0 01.117 3.102 4.533 4.533 0 011.203 3.143c0 4.505-2.74 5.49-5.35 5.78a2.807 2.807 0 01.812 2.174v3.222c0 .314.21.68.8.565A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
                    </svg>
                  </a>{" "}
                </div>
              </div>
              <div className="projDesc">
                <p>
                  Robust and secure full-stack web application designed to
                  streamline the assignment and tracking of development tasks
                  for candidates, making it an ideal tool for technical
                  assessments, talent evaluation.
                </p>
              </div>
              <div>
                <div className="techBadge">HTML</div>
                <div className="techBadge">Tailwind</div>
                <div className="techBadge">Typescript</div>
                <div className="techBadge">Node.js</div>
                <div className="techBadge">Angular.js</div>
                <div className="techBadge">Express.js</div>
                <div className="techBadge">StackBliz</div>
                <div className="techBadge">bcrypt</div>
                <div className="techBadge">JWT</div>
              </div>
            </div>

            <div className="projectDiv" data-aos="fade-up-right">
              <div className="imgdiv">
                <img src="/src/assets/Portfolio.png" alt="" />
              </div>

              <div className="namingProject">
                <h4>Portfolio</h4>
                <div className="sepLiveCode">
                  <a
                    className="atag"
                    href=""
                    target="_blank"
                    style={{
                      marginRight: "25px",
                      color: "blue",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                  <a
                    href="  https://github.com/romanvaibhav
"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: "#FFFFFF" }}
                    >
                      <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.016 10.936c.586.11.797-.254.797-.566v-2.1c-3.264.71-3.95-1.576-3.95-1.576a3.11 3.11 0 00-1.304-1.714c-1.064-.73.082-.716.082-.716a2.465 2.465 0 011.797 1.205 2.5 2.5 0 003.408.978 2.517 2.517 0 01.75-1.57c-2.6-.296-5.336-1.3-5.336-5.79a4.533 4.533 0 011.204-3.143 4.212 4.212 0 01.115-3.102s.981-.31 3.216 1.193a11.09 11.09 0 015.856 0c2.23-1.504 3.213-1.193 3.213-1.193a4.212 4.212 0 01.117 3.102 4.533 4.533 0 011.203 3.143c0 4.505-2.74 5.49-5.35 5.78a2.807 2.807 0 01.812 2.174v3.222c0 .314.21.68.8.565A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
                    </svg>
                  </a>{" "}
                </div>
              </div>
              <div className="projDesc">
                <p>Working...</p>
              </div>
              <div>
                <div className="techBadge">HTML</div>
                <div className="techBadge">Tailwind</div>
                <div className="techBadge">Javascript</div>
                <div className="techBadge">React.js</div>
              </div>
            </div>

            <div className="projectDiv" data-aos="fade-up">
              <div className="imgdiv">
                <img src="/src/assets/Portfolio.png" alt="" />
              </div>

              <div className="namingProject">
                <h4>Book-Your-Show</h4>
                <div className="sepLiveCode">
                  <a
                    className="atag"
                    href="https://react-dashboard-panel2025.netlify.app/"
                    target="_blank"
                    style={{
                      marginRight: "25px",
                      color: "blue",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>

                  <a
                    href="  https://github.com/romanvaibhav
"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: "#FFFFFF" }}
                    >
                      <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.016 10.936c.586.11.797-.254.797-.566v-2.1c-3.264.71-3.95-1.576-3.95-1.576a3.11 3.11 0 00-1.304-1.714c-1.064-.73.082-.716.082-.716a2.465 2.465 0 011.797 1.205 2.5 2.5 0 003.408.978 2.517 2.517 0 01.75-1.57c-2.6-.296-5.336-1.3-5.336-5.79a4.533 4.533 0 011.204-3.143 4.212 4.212 0 01.115-3.102s.981-.31 3.216 1.193a11.09 11.09 0 015.856 0c2.23-1.504 3.213-1.193 3.213-1.193a4.212 4.212 0 01.117 3.102 4.533 4.533 0 011.203 3.143c0 4.505-2.74 5.49-5.35 5.78a2.807 2.807 0 01.812 2.174v3.222c0 .314.21.68.8.565A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="projDesc">
                <p>
                  Book Your Show is a full-stack movie ticket booking web app
                  built with the MEAN stack (MongoDB, Express.js, Angular,
                  Node.js). It allows users to browse movies, filter by city or
                  theatre, book seats, make payments, and view booking history.
                  An admin panel enables managing movies, theatres, and
                  showtimes.
                </p>
              </div>
              <div>
                <div className="techBadge">HTML</div>
                <div className="techBadge">Bootstrap</div>
                <div className="techBadge">React.js</div>
                <div className="techBadge">Node.js</div>
                <div className="techBadge">Express.js</div>
                <div className="techBadge">Node.js</div>
                <div className="techBadge">rxjs</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "skills" && (
        <div className="fixdiv">
          <div className="TechSkills">
            <div class="skills-container">
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  alt="C++"
                />
                <p>C++</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                />
                <p>Java</p>
              </div>
              <div class="skill-card" data-aos="fade-up">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML"
                />
                <p>HTML</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS"
                />
                <p>CSS</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="Tailwind CSS"
                />
                <p>Tailwind</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                />
                <p>Bootstrap</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <p>JavaScript</p>
              </div>
              <div class="skill-card" data-aos="fade-up">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                />
                <p>TypeScript</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  alt="React.js"
                />
                <p>React.js</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                  alt="Angular.js"
                />
                <p>Angular.js</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express.js"
                />
                <p>Express.js</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                />
                <p>Node.js</p>
              </div>
              <div class="skill-card" data-aos="fade-up">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                  alt="Spring Boot"
                />
                <p>SpringBoot</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="SQL"
                />
                <p>SQL</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
                <p>MongoDB</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                  alt="JDBC"
                />
                <p>JDBC</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://hibernate.org/images/hibernate-logo.svg"
                  alt="Hibernate"
                />
                <p>Hibernate</p>
              </div>
              <div class="skill-card" data-aos="fade-up">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
                <p>Git</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                  alt="VS Code"
                />
                <p>VS Code</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="Postman"
                />
                <p>Postman</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                />
                <p>Next.js</p>
              </div>
              <div class="skill-card" data-aos="fade-up-right">
                <img
                  src="https://avatars.githubusercontent.com/u/31715267?s=200&v=4"
                  alt="NgRx"
                />
                <p>NgRx</p>
              </div>
              <div class="skill-card" data-aos="fade-up">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                  alt="AWS"
                />
                <p>AWS</p>
              </div>
              <div class="skill-card" data-aos="fade-up-left">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                />
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "education" && (
        <div className="fixdiv">
          <div className="Education" data-aos="fade-up">
            <div className="eduDiv">
              <p>Graduation: Bachelors of Engineering (CS)</p>
              <p>
                <i className="fas fa-graduation-cap text-blue-500"></i> 8.41
                CGPA
              </p>
              <p>
                Bhivarabai Sawant Institute of Technolgy and Research (BSITOR)
                Pune
              </p>
            </div>
          </div>

          <div className="Education" data-aos="fade-up">
            <div className="eduDiv">
              <p>Higher Secondary: 12th (Science)</p>

              <p>
                <i className="fas fa-graduation-cap text-blue-500"></i> 69
                percent(%)
              </p>
              <p>
                Shri Sangameshwar Education Society’s Sangameshwar College,
                Solapur
              </p>
            </div>
          </div>
          <div className="Education" data-aos="fade-up">
            <div className="eduDiv">
              <p>Secondary: 10th</p>
              <p>
                <i className="fas fa-school" style={{ marginRight: "8px" }}></i>
                86 percent(%)
              </p>
              <p>Lt. Vilaschandra Motichand Mehta High School, Solapur</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Fifth;
