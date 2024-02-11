import './App.css';
import { Link } from "react-router-dom"
import skydive from "./IMG_3407.jpg"
function App() {
  return (
      <div className="App">
          <nav className={"navbar"}>
              <Link to={"/about"}>About</Link>
              <Link to={"/works"}>Works</Link>
              <Link to={"/contacts"}>Contact</Link>
              <Link to={"/notes"}>Notes</Link>
          </nav>

          <div className={"section1"}>
              <div className={"name"}>
                <p>I'm Samuel Oyeneyin</p>
              </div>

              <div className={"body-paragraph"}>
                  <h1>I'm an undergraduate student in my 4th year <br/> attending the university of maryland <br/> baltimore county.</h1>
                  <p>Below you can see me flying in the sky.</p>
                  <img src={skydive} alt={"skydive picture"} width={700} height={300}/>
              </div>
          </div>

      </div>
  );
}

export default App;
