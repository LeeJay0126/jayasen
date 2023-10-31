import LatestProjectComponent from "./LatestProjectComponent";


const LatestProject = () => {

    return (
        <div className="LatestProjectContainer">
            <h2 className="HomeProjectHeader">
                OUR LATEST
            </h2>
            <h2 className="HomeProjectHeader later">
                PROJECTS
            </h2>
            <div className="RedUnderLine"></div>
            <LatestProjectComponent/>
        </div>
    );

};

export default LatestProject;