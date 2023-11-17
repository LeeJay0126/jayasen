//Pictures subjected to change
// import jayProfile from "../../SharedComponents/Imgs/SoloImages/Jay/jayProfile1.jpg";
// import asenProfile from "../../SharedComponents/Imgs/SoloImages/Asen/asenProfile1.jpg";
import ResumeComponent from "../About/ResumeComponent";
import JayProfessional from "./Jay/JayProfessional";
import JayWorkExperience from "./Jay/JayWorkExperience";
import AsenProfessional from "./Asen/AsenProfessional";
import AsenWorkExperience from "./Asen/AsenWorkExperience";
import JayPicture from "../../SharedComponents/Imgs/SoloImages/Jay/jayProfile1.jpg"
import AsenPicture from "../../SharedComponents/Imgs/SoloImages/Asen/asenProfile1.jpg"

const Resume = (props) => {
    const JayProfessionalList = JayProfessional.map((jobs) =>
    (<ResumeComponent
        company={jobs[0]}
        title={jobs[1]}
        type={jobs[4]}
        startDate={jobs[2]}
        endDate={jobs[3]}
        jobDescription={jobs[5]}
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
        jobDescription={jobs[5]}
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
        jobDescription={jobs[5]}
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
        jobDescription={jobs[5]}
        key={jobs[3]}
    />
    ));

    const Jay = (
        <section className="resumeContainer">
            <section className="resumeHero">
                <img src={JayPicture} alt="jay for resume" className="resumeImage" />
                <aside>
                    <h2 className="resumeHeroHeading">
                        Jay Seung Yeon Lee
                    </h2>
                    <div className="Education">
                        <div className="EducationRight">
                            <h2>
                                Langara College
                            </h2>
                            <h3>
                                Computer Science
                            </h3>
                        </div>
                        <div className="EducationLeft">
                            <h3>
                                2020.01 ~ 2023.12
                            </h3>
                        </div>
                    </div>
                </aside>
            </section>
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
            <section className="resumeHero">
                <img src={AsenPicture} alt="jay for resume" className="resumeImage" />
                <aside>
                    <h2 className="resumeHeroHeading">
                        Asen Woo Chang Lee
                    </h2>
                    <div className="Education">
                        <div className="EducationRight">
                            <h2>
                                University of British Columbia
                            </h2>
                            <h3>
                                Statistics
                            </h3>
                        </div>
                        <div className="EducationLeft">
                            <h3>
                                2017.09 ~ 2023.04
                            </h3>
                        </div>
                    </div>
                </aside>
            </section>
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