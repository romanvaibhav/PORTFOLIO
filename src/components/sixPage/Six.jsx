import "./Six.css";
import AOS from "aos";
import "aos/dist/aos.css";
import DSA from "../../assets/DSA.png";

import { useEffect } from "react";
function Six() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="sixblock">
      <div>
        <h1 className="problemHead">Data Sturcture & Problem Solving</h1>
      </div>
      <div className="Limits">
        <div className="imgandskills">
          <div className="thinkimg">
            <img src={DSA} alt="" />
          </div>

          <div className="achieve">
            <div className="subach">
              <div className="ment" data-aos="fade-left">
                <h3>1000+ Probelms Solved</h3>
              </div>
              <div className="ment" data-aos="fade-right">
                <h3>5 star on HackeRank</h3>
              </div>
              <div className="ment" data-aos="fade-left">
                <h3>Knight on LeetCode </h3>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "130px",
                  alignItems: "center",
                  marginBottom: "-40px",
                  marginTop: "30px",
                }}
              >
                <a
                  href="https://www.hackerrank.com/profile/vaibhavroman2022"
                  target="_blank"
                >
                  <img
                    className="social-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
                    alt="HackerRank"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="  https://leetcode.com/u/vaibhavroman2022/
"
                  target="_blank"
                >
                  <img
                    className="social-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    width="40"
                    height="40"
                  />
                </a>

                <a
                  href="https://www.geeksforgeeks.org/user/vaibhavroman249/"
                  target="_blank"
                >
                  <img
                    className="social-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                    alt="GeeksforGeeks"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img src="/src/assets/light-bulb-with-drawing-graph.jpg" alt="" /> */}
    </div>
  );
}
export default Six;
