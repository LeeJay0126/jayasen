import { Link } from "react-router-dom";
import LatestProjectComponent from "./LatestProjectComponent";
import Project from "../Projects/Project";

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
            <LatestProjectComponent />
            <div className="HomeProjectLinkContainer">
                <div className="HPLHelper">
                    <Link to="/projects" element={<Project />} className="moreProjectsButton">More Projects</Link>
                </div>
            </div>
        </div>
    );

};

export default LatestProject;