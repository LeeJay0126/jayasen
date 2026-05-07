import "./Project.css";
import Menu from "../../SharedComponents/Menu/Menu";
import Footer from "../../SharedComponents/Footer/Footer";
import { VscTools } from "react-icons/vsc";
import ProjectItemList from "./ProjectItemList";
import ProjectItem from "./ProjectItem";

const Project = () => {

    const ProjectComponents = ProjectItemList.map((proj) =>(
        <ProjectItem project={proj} key={proj.title}/>
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
