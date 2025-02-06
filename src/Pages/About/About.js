import Footer from "../../SharedComponents/Footer/Footer";
import Menu from "../../SharedComponents/Menu/Menu";
import './About.css';
import { LuNewspaper } from "react-icons/lu";
import { useState } from "react";
import Resume from "./Resume";


const About = () => {
    const [resumeOwner, setResume] = useState(true);

    const ResumeDisplayHandler = (bool) => {
        setResume(bool);
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
                    <button className={resumeOwner ? "ResumeDisplayButtonN" : "ResumeDisplayButton"} onClick={()=>ResumeDisplayHandler(true)}>Professional</button>
                    <button className={resumeOwner ? "ResumeDisplayButton" : "ResumeDisplayButtonN"} onClick={()=>ResumeDisplayHandler(false)}>CustServ</button>
                </div>
                <Resume resumeOwner={resumeOwner} />
            </section>
            <Footer />
        </main>
    );
}

export default About;