import "./first.css";
import { Link } from "react-scroll";
import SideBar from "../Sidebar/SideBar";
import myImg from "../../assets/vaibhav-portfolio-image.png";

function First() {
  return (
    <div className="gradient-bg">
      <div>
        <p>Jai Shree Ram, I'm </p>
        <p className="name">VAIBHAV</p>
      </div>
      <div className="photo">
        <div className="welcome">
          <p className="wel">WELCOME</p>
          <p className="to">TO MY</p>
          <p className="port">PORTFOLIO</p>
        </div>
        <img className="img" src={myImg} alt="" />
      </div>
      {/* <SideBar></SideBar> */}
    </div>
  );
}

export default First;
