import "./SideBar.css";
import { Link } from "react-scroll";

function SideBar() {
  return (
    <div>
      <div className="right-sidebar">
        <div className="sidebar-icon">
          {/* You can replace this with an SVG or FontAwesome icon */}
          <span>☰</span>
        </div>
        <div className="sidebar-content">
          <p>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </p>
          <p>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </p>
          <p>
            <Link to="project" smooth={true} duration={500}>
              Projects & Skills
            </Link>
          </p>
          <p>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </p>
          <p>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
