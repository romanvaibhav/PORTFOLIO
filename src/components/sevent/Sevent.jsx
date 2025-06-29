import ContactForm from "../contactForm/ContactForm";
import "./Seventh.css";
function Sevent() {
  return (
    <div className="sevBlock">
      <div className="headSev">
        <h1>Let's Connect</h1>
      </div>
      <div className="sevDivi">
        <div className="sevDivi1">
          <h2>Questions and Feedbacks are welcome</h2>
          <p>
            <span>
              <a href="mailto:vaibhavroman249@gmail.com" title="Email">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 -5 24 24"
                  color="white"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 6 8-6V18H4z" />
                </svg>
              </a>
            </span>
            <span className="emailSev"> vaibhavroman249@gmail.com</span>
          </p>
          <p>
            <span>
              <svg
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 -4 24 24"
                style={{ marginTop: "10px" }}
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.2.48 2.5.74 3.83.74a1 1 0 011 1V21a1 1 0 01-1 1C10.29 22 2 13.71 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.33.26 2.63.74 3.83a1.003 1.003 0 01-.21 1.11l-2.2 2.2z" />
              </svg>
            </span>
            <span className="emailSev">7448193390</span>
          </p>
          <div
            style={{
              display: "flex",
              gap: "40px",
              fontSize: "24px",
              alignItems: "center",
              marginTop: "30px",
              marginLeft: "40px",
            }}
          >
            {/* LinkedIn */}

            <a
              href=" https://www.linkedin.com/in/vaibhav-roman-8917ba210/
"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <svg
                className="social-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#0077B5" }}
              >
                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM.34 6h4.3v14h-4.3V6zM8.25 6h4.12v1.68h.06c.57-1.08 1.97-2.21 4.06-2.21 4.34 0 5.14 2.86 5.14 6.58V20h-4.3v-6.96c0-1.66-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V20h-4.3V6z" />
              </svg>
            </a>
            {/* GitHub */}

            <a
              href="  https://github.com/romanvaibhav
"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <svg
                className="social-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.016 10.936c.586.11.797-.254.797-.566v-2.1c-3.264.71-3.95-1.576-3.95-1.576a3.11 3.11 0 00-1.304-1.714c-1.064-.73.082-.716.082-.716a2.465 2.465 0 011.797 1.205 2.5 2.5 0 003.408.978 2.517 2.517 0 01.75-1.57c-2.6-.296-5.336-1.3-5.336-5.79a4.533 4.533 0 011.204-3.143 4.212 4.212 0 01.115-3.102s.981-.31 3.216 1.193a11.09 11.09 0 015.856 0c2.23-1.504 3.213-1.193 3.213-1.193a4.212 4.212 0 01.117 3.102 4.533 4.533 0 011.203 3.143c0 4.505-2.74 5.49-5.35 5.78a2.807 2.807 0 01.812 2.174v3.222c0 .314.21.68.8.565A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_its_vaibhav__roman__96/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <svg
                className="social-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#E1306C" }}
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="sevDivi2">
          <ContactForm></ContactForm>
        </div>
      </div>
      <p className="footerText">© 2025 Vaibhav Roman. All rights reserved.</p>
    </div>
  );
}
export default Sevent;
