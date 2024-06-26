// Should get image to use for the latest projects
import ProjectItemList from "../Projects/ProjectItemList";
import ProjectItem from "../Projects/ProjectItem";

const LatestProjectComponent = () => {
    const project1 = ProjectItemList[0];
    const project2 = ProjectItemList[1];

    return (
        <div className="homeLatestProjectsContainer">
            <ProjectItem src={project1[0]} alt={project1[1]} title={project1[2]} lang={project1[3]}
                progress={project1[4]} deploy={project1[5]} url={project1[6]} />
            <ProjectItem src={project2[0]} alt={project2[1]} title={project2[2]} lang={project2[3]}
                progress={project2[4]} deploy={project2[5]} url={project2[6]} />
        </div>
    );
};

export default LatestProjectComponent;