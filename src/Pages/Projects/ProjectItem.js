
const ProjectItem = (props) =>{
    return (
        <div className="ProjectItemCard">
            <img src={require("../../SharedComponents/Logos/" + props.src)}
                 alt = {props.alt}
                 className="PICHero"
            />
            


        </div>
    );
};

export default ProjectItem;