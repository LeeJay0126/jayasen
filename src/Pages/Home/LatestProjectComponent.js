// Should get image to use for the latest projects
import ProjectItemList from "../Projects/ProjectItemList";
import ProjectItem from "../Projects/ProjectItem";

const LatestProjectComponent = () => {
    const latestProjects = ProjectItemList.slice(0, 2);

    return (
        <div className="homeLatestProjectsContainer">
            {latestProjects.map((project) => (
                <ProjectItem project={project} variant="compact" key={project.title} />
            ))}
        </div>
    );
};

export default LatestProjectComponent;
