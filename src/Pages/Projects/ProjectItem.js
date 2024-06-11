
const ProjectItem = (props) => {

    const programmingLanguages = (
        props.lang.map((item) =>
            <li className="projectLanguageCircle" key={item}>
                {item}
            </li>
        )
    );
    /*
        [0] = src
        [1] = alt
        [2] = title
        [3] = languages
        [4] = progression status / true == in progress
        [5] = deployment status / true == deployed
        [6] = url of the project if the project is being deployed
    */
    return (
        <div className="ProjectItemCard">
            <img src={require("../../SharedComponents/Imgs/Logos/" + props.src)}
                alt={props.alt}
                className="PICHero"
            />
            <h3 className="projectTitle">
                {props.title}
            </h3>
            <div className="projectCircleContainer">
                {programmingLanguages}
            </div>
            <section className="projectCardFlex">
                <h3 className="PCSpan">
                    Progress: 
                </h3>
                {props.progress ? <h3 className="PCStatus PCTrue">In Progress</h3> : <h3 className="PCStatus PCFalse">Completed</h3>}
            </section>
            <section className="projectCardFlex">
                <h3 className="PCSpan">
                    Deployment: 
                </h3>
                {props.deploy ? <h3 className="PCStatus PCTrue">Deployed</h3> : <h3 className="PCStatus PCFalse">Unavailable</h3>}
            </section>
        </div>
    );
};

export default ProjectItem;