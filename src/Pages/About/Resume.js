//Pictures subjected to change
// import jayProfile from "../../SharedComponents/Imgs/SoloImages/Jay/jayProfile1.jpg";
// import asenProfile from "../../SharedComponents/Imgs/SoloImages/Asen/asenProfile1.jpg";
import ResumeComponent from "../About/ResumeComponent";
import JayProfessional from "./Jay/JayProfessional";
import JayWorkExperience from "./Jay/JayWorkExperience";
import AsenProfessional from "./Asen/AsenProfessional";
import AsenWorkExperience from "./Asen/AsenWorkExperience";

const Resume = (props) => {
    const JayProfessionalList = JayProfessional.map((jobs) =>
    (<ResumeComponent
        company={jobs[0]}
        title={jobs[1]}
        type={jobs[4]}
        startDate={jobs[2]}
        endDate={jobs[3]}
        key={jobs[3]}
    />
    ));
    const JayJobList = JayWorkExperience.map((jobs) =>
    (<ResumeComponent
        company={jobs[0]}
        title={jobs[1]}
        type={jobs[4]}
        startDate={jobs[2]}
        endDate={jobs[3]}
        key={jobs[3]}
    />
    ));
    const AsenProfessionalList = AsenProfessional.map((jobs) =>
    (<ResumeComponent
        company={jobs[0]}
        title={jobs[1]}
        type={jobs[4]}
        startDate={jobs[2]}
        endDate={jobs[3]}
        key={jobs[3]}
    />
    ));
    const AsenJobList = AsenWorkExperience.map((jobs) =>
    (<ResumeComponent
        company={jobs[0]}
        title={jobs[1]}
        type={jobs[4]}
        startDate={jobs[2]}
        endDate={jobs[3]}
        key={jobs[3]}
    />
    ));

    const Jay = (
        <section className="resumeContainer">
            <h2 className="resumeHeading">
                Work Experience
            </h2>
            <ul className="ResumeListContainer">
                {JayProfessionalList}
            </ul>
            <h2 className="resumeHeading">
                Customer Service Experience
            </h2>
            <ul className="ResumeListContainer">
                {JayJobList}
            </ul>
        </section>
    );

    const Asen = (
        <section className="resumeContainer">
            <h2 className="resumeHeading">
                Work Experience
            </h2>
            <ul className="ResumeListContainer">
                {AsenProfessionalList}
            </ul>
            <h2 className="resumeHeading">
                Customer Service Experience
            </h2>
            <ul className="ResumeListContainer">
                {AsenJobList}
            </ul>
        </section>
    );

    return (
        <div>
            {props.resumeOwner ? Jay : Asen}
        </div>
    );
}

export default Resume;