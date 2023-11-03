import Footer from "../../SharedComponents/Footer/Footer";
import Menu from "../../SharedComponents/Menu/Menu";
import './About.css';
import AboutIntro from "./Resume";
import jayProfile from "../../SharedComponents/Imgs/SoloImages/Jay/jayProfile1.jpg";
import asenProfile from "../../SharedComponents/Imgs/SoloImages/Asen/asenProfile1.jpg";
import { LuNewspaper } from "react-icons/lu";
import { useState } from "react";


const About = () => {
    const [resumeOwner, setResume] = useState(true);

    const ResumeDisplayHandler = () =>{
        setResume(!resumeOwner);
    };

    return (
        <main>
            <Menu />
            <section className="sectionIntro">
                <LuNewspaper className="ResumeIcon" />
                <h1 className="ResumeHeading">
                    RESUME
                </h1>
            </section>
            <section className="ResumeDisplayArea">
                <div className="ResumeDisplayButtonContainer">
                    <button className={resumeOwner ? "ResumeDisplayButtonN" : "ResumeDisplayButton"} onClick={ResumeDisplayHandler}>Jay</button>
                    <button className={resumeOwner ? "ResumeDisplayButton" :"ResumeDisplayButtonN"} onClick={ResumeDisplayHandler}>Asen</button>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default About;