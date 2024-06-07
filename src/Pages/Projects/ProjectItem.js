
const ProjectItem = (props) =>{

    const programmingLanguages = (
        props.lang.map((item)=>
            <li className="projectLanguageCircle">
                {item}
            </li>
        )
    );

    return (
        <div className="ProjectItemCard">
            <img src={require("../../SharedComponents/Logos/" + props.src)}
                 alt = {props.alt}
                 className="PICHero"
            />
            <h3 className="projectTitle">
                {props.title}
            </h3>
            {programmingLanguages}
        </div>
    );
};

export default ProjectItem;