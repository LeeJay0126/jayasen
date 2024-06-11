// Should get image to use for the latest projects
import ProjectItemList from "../Projects/ProjectItemList";
import ProjectItem from "../Projects/ProjectItem";

const LatestProjectComponent = () => {
    const project1 = ProjectItemList[0];

    return (
        <div className="homeLatestProjectsContainer">
            <div className="homeProjectsFlex">
                <ProjectItem src={project1[0]} alt={project1[1]} title={project1[2]} lang={project1[3]} 
                             progress={project1[4]} deploy={project1[5]} url={project1[6]}/>
            </div>
        </div>
    );
};

export default LatestProjectComponent;