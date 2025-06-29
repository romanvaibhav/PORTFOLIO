import "./App.css";
import Fifth from "./components/fifthPage/Fifth";
import First from "./components/firstPage/first";
import Fourth from "./components/fourthPage/fourt";
import Second from "./components/SecondPage/Second";
import Third from "./components/ThirdPage/Third";
import Six from "./components/sixPage/Six";
import Sevent from "./components/sevent/Sevent";

function App() {
  return (
    <>
      <div>
        <div id="home">
          <First></First>
        </div>
        <Second></Second>
        <div id="about">
          <Third></Third>
        </div>
        <div id="project">
          <Fifth></Fifth>
        </div>
        <div id="experience">
          <Fourth></Fourth>
        </div>
        <Six></Six>
        <div id="contact">
          <Sevent></Sevent>
        </div>
      </div>
    </>
  );
}

export default App;
