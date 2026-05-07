import Footer from "../../SharedComponents/Footer/Footer";
import Menu from "../../SharedComponents/Menu/Menu";
import './About.css';
import { LuNewspaper } from "react-icons/lu";
import Resume from "./Resume";


const About = () => {
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
                <Resume />
            </section>
            <Footer />
        </main>
    );
}

export default About;
