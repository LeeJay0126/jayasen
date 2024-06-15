import "./Project.css";
import Menu from "../../SharedComponents/Menu/Menu";
import Footer from "../../SharedComponents/Footer/Footer";
import { VscTools } from "react-icons/vsc";
import ProjectItemList from "./ProjectItemList";
import ProjectItem from "./ProjectItem";

const Project = () => {

    const ProjectComponents = ProjectItemList.map((proj) =>(
        <ProjectItem src={proj[0]} alt={proj[1]} title={proj[2]} lang={proj[3]}
        progress={proj[4]} deploy={proj[5]} url={proj[6]} key={proj[2]}/>
    ));

    return (
        <div className="ProjectPage">
            <Menu />
            <main className="ProjectsMain">
                <section className="sectionIntro">
                    <VscTools className="ResumeIcon" />
                    <h1 className="ResumeHeading">
                        PROJECTS
                    </h1>
                </section>
                <section className="projectsContainer">
                    {ProjectComponents}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Project;