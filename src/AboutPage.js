import {Link} from "react-router-dom";
import './App.css';
import bungeejump from "./IMG_3412.jpg";
function AboutPage() {
    return(
        <div className="About">
            <nav className={"navbar"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/works"}>Works</Link>
                <Link to={"/contacts"}>Contact</Link>
                <Link to={"/notes"}>Notes</Link>
            </nav>

            <div className={"section1"}>
                <div className={"name"}>
                    <p>All about me!</p>
                </div>

                <div className={"body-paragraph"}>
                    <ul>
                        <li>If you couldn't tell by now I like extreme activities.</li>
                        <li>I also like going to the gym alot.</li>
                        <li> I'm trying to improve <br/> my front-end design skills <br/> (I know shocker with how the website looks lol). </li>
                        <li>Lastly I like to play games (palworld goes crazy) </li>
                    </ul>
                    <p>Below you can see me jumping off a bridge.</p>
                    <img src={bungeejump} alt={"skydive picture"} width={200} height={300}/>
                </div>
            </div>
        </div>
    )

}

export default AboutPage;