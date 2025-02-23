import ResumeComponent from "../About/ResumeComponent";
import JayProfessional from "./Jay/JayProfessional";
import JayWorkExperience from "./Jay/JayWorkExperience";
import JayPicture from "../../SharedComponents/Imgs/SoloImages/Jay/프로필사진.jpg"

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
                    <div className="Education">
                        <div className="EducationRight">
                            <h2>
                                Simon Fraser University
                            </h2>
                            <h3>
                                Criminology
                            </h3>
                        </div>
                        <div className="EducationLeft">
                            <h3>
                                2017.09 ~ 2019.12
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
        </section>
    );

    const Asen = (
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
                    <div className="Education">
                        <div className="EducationRight">
                            <h2>
                                Simon Fraser University
                            </h2>
                            <h3>
                                Criminology
                            </h3>
                        </div>
                        <div className="EducationLeft">
                            <h3>
                                2017.09 ~ 2019.12
                            </h3>
                        </div>
                    </div>
                </aside>
            </section>
            <h2 className="resumeHeading">
                Customer Service Experience
            </h2>
            <ul className="ResumeListContainer">
                {JayJobList}
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