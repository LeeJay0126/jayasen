
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
        </div>
    );
};

export default ProjectItem;